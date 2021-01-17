import React from 'react';

import Stripe from './Stripe/Stripe';
import { services } from '../../Services/availableServices';

import classes from './Checkout.module.scss';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Checkout = ({ data, success, meta }) => {
    const onSubmitHandler = () => {
        success();
    };
    
    const mapIdsToServices = () => {
        return data.service.id.map(serviceId => services.find(service => service.id === serviceId ));
    };

    const countTotalPrice = () => {
        let price = 0;

        mapIdsToServices().map(service => {
            price += service.price;

            return service;
        });

        return price.toFixed(2);
    };

    return (
        <div className = { classes.Checkout }>
            <div className = { classes.Main }>
                <div className = { classes.Meta }>
                    <h2 className = { classes.Text }>Summary</h2>
                </div>

                <div className = { classes.Schedule }>
                    <p className = { classes.Time }>{ ('0' + new Date(data.service.time).getHours()).slice(-2) + ":" + ('0' + new Date(data.service.time).getMinutes()).slice(-2) }</p>
                    <div className = { classes.Separation } />
                    <p className = { classes.Date }>{ new Date(data.service.time).getDate() + ' ' + monthNames[new Date(data.service.time).getMonth()] }<br/>{ weekNames[new Date(data.service.time).getDay()] }</p>
                </div>

                <div className = { classes.Line } />

                <div className = { classes.Services }>
                    { mapIdsToServices().map((service, i) => 
                        <div className = { classes.Service } key = { i }>
                            <p className = { classes.Name }>{ service.name }</p>
                            <p className = { classes.Duration }>{ service.duration >= 60 && (~~(service.duration / 60) + ' hrs') } { service.duration % 60 !== 0 ? service.duration % 60 + ' mins' : '' }</p>
                        </div>                 
                    )}
                </div>
                
                <div className = { classes.Line } />

                <div className = { [classes.Box, data.details.payment === 'card' ? classes.Card : ''].join(' ') }>
                    { data.details.payment === 'venue' ?
                        <React.Fragment>
                            <p className = { classes.Stats }>Payment method:</p>
                            <p className = { classes.Result }>{ data.details.payment === 'venue' ? 'Pay at venue' : 'Pay with card' }</p>
                        </React.Fragment>
                        : <Stripe />
                    }
                    { meta && <p className = { classes.Error }>{ meta }</p> }
                </div>
                
                <div className = { classes.Line } />

                <div className = { classes.Box }>
                    <p className = { classes.Stats }>Order total:</p>
                    <p className = { classes.Result }>£{ countTotalPrice() }</p>
                </div>

                <div className = { classes.Line } />
            </div>

            <div className = { classes.Submit }>
                { data.details.payment === 'card' && <p className = { classes.Terms }>By clicking 'Pay now' button, you agree to our <span>Booking Terms</span></p> }
                <button className = { classes.Button } onClick = { onSubmitHandler }>{ data.details.payment === 'venue' ? 'Buy now' : 'Pay now' }</button>
            </div>
        </div>
    );
}

export default Checkout;
