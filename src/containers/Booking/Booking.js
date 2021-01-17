import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_DOMAIN } from '../../config/constants';

import Spinner from '../../components/UI/Spinner/Spinner';
import Section from '../Section/Section';
import Schedule from '../../components/Booking/Schedule/Schedule';
import Details from '../../components/Booking/Details/Details';
import Checkout from '../../components/Booking/Checkout/Checkout';
import Success from '../../components/Booking/Success/Success';

import classes from './Booking.module.scss';

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const Booking = ({ services, closePanel }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [process, setProcess] = useState('Schedule');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    
    const [result, setResult] = useState({ service: { id: services } });
    const [schedule, setSchedule] = useState(null);

    const [stripeError, setStripeError] = useState();
    const [clientSecret, setClientSecret] = useState();

    useEffect(() => {
        getSchedule();
    }, []);

    const closeModal = (element) => {
        if(element === document.getElementsByClassName(classes.Modal)[0]) {
            document.body.style.overflow = 'auto';
            closePanel();
        }
    }
    
    const getSchedule = () => {
        setLoading(true);

        axios.get(BACKEND_DOMAIN + 'appointment/beautyatluxx/?id=' + services)
            .then(response => {
                setSchedule(response.data.schedule);
                setLoading(false);
            })
            .catch(error => {
                setError(error.response.data.message);
                setLoading(false);
            });
    }
    
    const scheduleSuccess = (time) => {
        setResult({ ...result, service: { ...result.service, time: time } });
        setProcess('Details');
    }
    
    const detailsSuccess = async (details) => {
        setLoading(true);

        try {
            const appointment = {
                service: { ...result.service },
                client: details.client,
                details: {
                    payment: details.payment
                }
            };

            if (details.payment === 'card') {
                const response = await axios.post(BACKEND_DOMAIN + 'appointment/beautyatluxx/card', { appointment: appointment })
                setClientSecret(response.data.clientSecret);
            }

            setResult(appointment);

            setProcess('Checkout');
            setLoading(false);        
        } catch (error) {
            setError(error.response.data.message);
            setLoading(false);
        }
    };

    const checkoutPay = async () => {
        setLoading(true);

        if (result.details.payment === 'card') {
            if (!stripe || !elements)
                return;
        
            try {
                const response = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: result.client.name,
                            email: result.client.email,
                            phone: result.client.phone
                        },
                    }
                });
                
                if (response.error) {
                    setStripeError(response.error.message);
                    setLoading(false);
                } else if (response.paymentIntent.status === 'succeeded') {
                    setProcess('Success');
                    setLoading(false);
                }
            } catch (error) {
                setError(error.message);
                setLoading(false);
            };
        } else if (result.details.payment === 'venue') {
            try {
                const appointment = { ...result };

                await axios.post(BACKEND_DOMAIN + 'appointment/beautyatluxx/venue', { appointment: appointment })
                
                setLoading(false);
                setProcess('Success');
            } catch (error) {
                setError(error.response.data.message);
                setLoading(false);
            }
        }    
    };

    const completionSuccess = () => {
        document.body.style.overflow = 'auto';
        closePanel();
    };

    return (
        <div className = { classes.Booking }>
            <div className = { classes.Modal } onClick = { (event) => closeModal(event.target) } />
            <div className = { classes.Console }>
                <Section 
                    meta = { process === 'Date' ? 'Select date' : process === 'Details' ? 'About you' : process === 'Checkout' ? 'Order review' : 'Success' } 
                    name = { process === 'Schedule' ? 'Choose time' : process === 'Details' ? 'Information' : process === 'Checkout' ? 'Checkout' : 'Your order' } 
                    description = { process === 'Schedule' ? 'Please, choose the available time' : process === 'Details' ? 'Please, enter the required information about you' : process === 'Checkout' ? 'Please, review your order' : 'Your appointment has been confirmed!' } />
                <div className = { classes.Content }>
                    { loading && <div className = { classes.LoadingWrapper }><Spinner /></div> }
                    { error
                        ? <p className = { classes.Error }>{ error }</p>
                        : process === 'Schedule' && !loading
                            ? <Schedule schedule = { schedule } success = { scheduleSuccess } /> 
                            : process === 'Details' && !loading
                                ? <Details success = { detailsSuccess } /> 
                                : process === 'Checkout'
                                    ? <Checkout data = { result } success = { checkoutPay } meta = { stripeError } />
                                    : !loading
                                        ? <Success success = { completionSuccess } email = { result.client.email } />
                                        : null }
                </div>                
            </div>
        </div>
    );
}

export default Booking;
