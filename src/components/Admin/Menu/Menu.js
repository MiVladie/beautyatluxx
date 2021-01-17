import React from 'react';

import messages_icon from '../../../assets/icons/messages.png';
import appointments_icon from '../../../assets/icons/appointments.png';
import close_icon from '../../../assets/icons/close.png';

import classes from './Menu.module.scss';

const Menu = ({ select, close }) => {
    return (
    	<div className = { classes.Menu }>
    		<div className = { classes.Wrapper }>
                <div className = { classes.Box } onClick = { () => select('Inbox') }>
                    <img className = { classes.Icon } src = { messages_icon } alt = 'Messages' />
                    <p className = { classes.Name }>Messages</p>
                </div>
                
                <div className = { classes.Box } onClick = { () => select('Appointments') }>
                    <img className = { classes.Icon } src = { appointments_icon } alt = 'Appointments' />
                    <p className = { classes.Name }>Appointments</p>
                </div>
                
                <div className = { classes.Box } onClick = { close }>
                    <img className = { classes.Icon } src = { close_icon } alt = 'Close' />
                    <p className = { classes.Name }>Close</p>
                </div>
            </div>
    	</div>
    );
}

export default Menu;
