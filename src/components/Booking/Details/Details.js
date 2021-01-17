import React, { useState } from 'react';

import classes from './Details.module.scss';

const isEmailAddress = (str) => {
    var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(str);
}

const Details = ({ success }) => {
    const [client, setClient] = useState({ name: '', email: '', phone: '' });
    const [payment, setPayment] = useState('venue');
    
    const onSubmitHandler = () => {
        let result = { client: client, payment: payment };
        success(result);
    };

    return (
    	<div className = { classes.Details }>
            <div className = { classes.Main }>
                <div className = { classes.Meta }>
                    <h2 className = { classes.Text }>Your details</h2>
                </div>

                <div className = { classes.Box }>
                    <p className = { classes.Description }>Please, enter your information</p>
                        
                    <div className = { classes.Input }>
                        <input className = { classes.Field } value = { client.name } onChange = { (event) => setClient({ ...client, name: event.target.value }) } type = 'text' placeholder = 'Your name' />
                    </div>

                    <div className = { classes.Input }>
                        <input className = { classes.Field } value = { client.email } onChange = { (event) => setClient({ ...client, email: event.target.value }) } type = 'text' placeholder = 'Your email' />
                    </div>

                    <div className = { classes.Input }>
                        <input className = { classes.Field } value = { client.phone } onChange = { (event) => setClient({ ...client, phone: event.target.value }) } type = 'text' placeholder = 'Your phone' />
                    </div>
                </div>

                <div className = { classes.Box }>
                    <p className = { classes.Description }>Please, choose the payment method</p>

                    <div className = { classes.Options }>
                        <div className = { [classes.Option, payment === 'venue' ? classes.Selected : ''].join(' ') } onClick = { () => setPayment('venue') }>Pay at venue</div>
                        <div className = { [classes.Option, payment === 'card' ? classes.Selected : ''].join(' ') } onClick = { () => setPayment('card') }>Pay with card</div>
                    </div>
                </div>
            </div>

            <div className = { classes.Submit }>
                { !isEmailAddress(client.email) && client.email !== '' && <p className = { classes.Extra }>Please, provide a valid email address</p> }
                <button className = { classes.Button } onClick = { onSubmitHandler } disabled = { client.name === '' || client.email === '' || client.phone === '' || !isEmailAddress(client.email) }>Checkout</button>
            </div>
        </div>
    );
}

export default Details;
