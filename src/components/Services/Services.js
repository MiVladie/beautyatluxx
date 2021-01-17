import React, { useState } from 'react';
import { STRIPE_PUBLISHABLE_KEY } from '../../config/constants';

import Booking from '../../containers/Booking/Booking';

import classes from './Services.module.scss';
import { services, categories, types } from './availableServices';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import expand from '../../assets/icons/scroll.png';

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const Services = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const [activeType, setActiveType] = useState(window.screen.width >= 720 ? 1 : null);
    const [activeServices, setActiveServices] = useState([]);
    const [booking, setBooking] = useState(false);
    
    const switchCategory = (category) => {
        setActiveType(window.screen.width >= 720 ? categories[category - 1].types[0] : null);
        setActiveCategory(category);
    }

    const switchType = (type) => {
        if(activeType === type && window.screen.width < 720) {
            setActiveType(null);
        } else {
            setActiveType(type);
        }
    }

    const switchService = (service) => {
        if(activeServices.includes(service)) {
            let servicesId = activeServices.filter(serviceId => serviceId !== service);

            setActiveServices(servicesId);
        } else {
            setActiveServices([ ...activeServices, service ]);
        }
    }

    const switchBooking = () => {
        document.body.style.overflow = !booking ? 'hidden' : 'visible';
        setBooking(!booking);
    }
    
    const selectedServices = activeType != null && <div className = { classes.Services }>
        { types[activeType - 1].services.map(service => (
            <div className = { [classes.Service, activeServices.includes(service) ? classes.ActiveService : ''].join(' ') } onClick = { () => switchService(service) } key = { service }>
                    <div className = { classes.Line }>
                        <p className = { classes.Name }>{ services[service - 1].name }</p>
                        <p className = { classes.Price }>now £{ ('' + services[service - 1].price).includes('.') ? services[service - 1].price.toFixed(2) : services[service - 1].price }</p>
                    </div>

                    <div className = { classes.Line }>
                        <p className = { classes.Time }>{ services[service - 1].duration >= 60 && (~~(services[service - 1].duration / 60) + ' hrs') } { services[service - 1].duration % 60 !== 0 ? services[service - 1].duration % 60 + ' mins' : '' }</p>
                        <p className = { classes.Discount }>save up to 20%</p>
                    </div>
                </div>
            )) }

        <a className = { [classes.Book, activeServices.length !== 0 ? classes.ActiveBook : ''].join(' ') } onClick = { () => switchBooking(!booking) }>Book now</a>
    </div>
    
    return (
        <Elements stripe = { stripePromise }>
            <div className = { classes.Services }>
                { booking && <Booking services = { activeServices } closePanel = { () => setBooking(false) } /> }

                <div className = { classes.Categories }>
                    { categories.map(category => (
                        <div className = { [classes.Category, activeCategory === category.id ? classes.Active : ''].join(' ') } onClick = { () => switchCategory(category.id) } key = { category.id }>
                            <img src = { category.icon } alt = { category.name } />
                            <p>{ category.name }</p>
                        </div>
                    )) }
                </div>

                <div className = { classes.Types }>
                    { categories[activeCategory - 1].types.map(type => (
                            <React.Fragment key = { types[type - 1].name }>
                                <div className = { [classes.Type, activeType === types[type - 1].id ? classes.Active : ''].join(' ') } onClick = { () => switchType(types[type - 1].id) }>
                                    <p className = { classes.Name }>{ types[type - 1].name }</p>
                                    { types[type - 1].services.some(e => activeServices.includes(e)) ? <div className = { classes.Contain } /> : '' }
                                    <img className = { [classes.Expand, activeType === types[type - 1].id ? classes.ExpandOpen : ''].join(' ') } src = { expand } alt = 'Expand' />
                                </div>

                                { activeType === types[type - 1].id && window.screen.width < 720 ? selectedServices : null }
                            </React.Fragment>
                        ))
                    }
                </div>

                { window.screen.width >= 720 && selectedServices }
            </div>
        </Elements>
    );
}

export default Services;
