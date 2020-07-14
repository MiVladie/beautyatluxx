import React from 'react';

import classes from './Summary.module.css';

const summary = () => {
    return (
    	<div className = { classes.Summary }>
    		<div className = { classes.Block }>
                <h1 className = { classes.Name }>About us</h1>
                <div className = { classes.Line } />
                <p className = { classes.Content }>Vestibulum ut mauris euismod, tristique augue sed, consequat metus. Duis fermentum massa ac metus suscipit tincidunt. Praesent felis felis, pretium sit amet vehicula at, posuere at mauris.</p>
            </div>
            
    		<div className = { classes.Block }>
                <h1 className = { classes.Name }>Open hours</h1>
                <div className = { classes.Line } />
                <p className = { classes.Content }>
                    <span>Monday: </span>
                    10:00 AM - 6:30 PM
                    <br />                    
                    <span>Tuesday: </span>
                    10:00 AM - 6:30 PM
                    <br />                    
                    <span>Wednesday: </span>
                    10:00 AM - 8:00 PM
                    <br />                    
                    <span>Thursday: </span>
                    10:00 AM - 8:00 PM
                    <br />                    
                    <span>Friday: </span>
                    10:00 AM - 6:30 PM
                    <br />                    
                    <span>Saturday: </span>
                    10:00 AM - 6:00 PM
                    <br />                    
                    <span>Sunday: </span>
                    11:00 AM - 5:00 PM
                    <br />
                </p>
            </div>
            
    		<div className = { classes.Block }>
                <h1 className = { classes.Name }>Contacts</h1>
                <div className = { classes.Line } />
                <p className = { classes.Content }>
                    <span>Address: </span>
                    43 High Street, Ealing,<br />London, W5 5DB
                    <br />
                    <span>Phone: </span>
                    +44 7342 216193
                    <br />
                    <span>Email: </span>
                    letscomit@gmail.com
                    <br />
                </p>
            </div>
    	</div>
    );
}

export default summary;
