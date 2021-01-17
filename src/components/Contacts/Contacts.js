import React from 'react';
import { GOOGLE_MAPS_API_KEY } from '../../config/constants';

import Form from './Form/Form';
import Map from './Map/Map';

import classes from './Contacts.module.scss';

const Contacts = () => {
    return (
    	<div className = { classes.Contacts }>
    		<div className = { classes.Map }>
                <Map
                    location = { { lat: 51.5127868, lng: -0.3047389 } }
                    zoom = { 15.5 }
                    googleMapURL = { "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAPS_API_KEY }
                    loadingElement = { <div style = {{ height: `100vh`, width: '100vw' }} /> } />
            </div>

            <div className = { classes.Container }>
                <div className = { classes.Wrapper }>
                    <h1 className = { classes.Text }>Get in touch</h1>
                    <div className = { classes.Line } />
                    <p className = { classes.Description }>Have any questions? Feel free to use contact form below to get in touch with us. We will answer you as soon as possible!</p>

                    <Form />
                </div>
            </div>
    	</div>
    );
}

export default Contacts;
