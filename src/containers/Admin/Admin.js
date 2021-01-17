import React, { useState, useEffect } from 'react';

import Section from '../Section/Section';
import Auth from '../../components/Admin/Auth/Auth';
import Menu from '../../components/Admin/Menu/Menu';
import Inbox from '../../components/Admin/Inbox/Inbox';
import Appointments from '../../components/Admin/Appointments/Appointments';

import classes from './Admin.module.scss';

const Admin = ({ closePanel }) => {
    const [logged, setLogged] = useState(false);
    const [selected, setSelected] = useState('Menu');

    useEffect(() => {
        checkLogin();
    }, []);

    const closeModal = (element) => {
        if(element === document.getElementsByClassName(classes.Modal)[0]) {
            closePanel();
        }
    }

    const checkLogin = () => {
        let token = localStorage.getItem('token');
        let expirationDate = localStorage.getItem('expirationDate');

        if(!token || !expirationDate) {
            return setLogged(false);
        }

        if(expirationDate < new Date()) {
            return setLogged(false);
        }

        if(!logged) {
            return setLogged(true);
        }
    }

    const getSectionData = () => {
        let meta = 'Login';
        let name = 'Admin page';
        let description = 'This is a restricted area. Please, enter your email and password below.';

        if(logged) {
            switch (selected) {
                case 'Menu':
                    meta = 'Menu';
                    name = 'Select';
                    description = 'Please, choose an option'
                    break;

                case 'Inbox':
                    meta = 'Inbox';
                    name = 'Messages';
                    description = 'Incoming messages';
                    break;
                
                case 'Appointments':
                    meta = 'Booking';
                    name = 'Appointments';
                    description = 'Upcoming appointments';
                    break;
                
                default:
                    break;
            }
        }
        
        return {
            meta: meta,
            name: name,
            description: description
        };
    };

    const onMenuSelect = (option) => {
        setSelected(option);
    };

    return (
    	<div className = { classes.Admin }>
    		<div className = { classes.Modal } onClick = { (event) => closeModal(event.target) } />
            <div className = { classes.Console }>
                <Section 
                    meta = { getSectionData().meta } 
                    name = { getSectionData().name } 
                    description = { getSectionData().description } />

                { !logged 
                    ? <Auth success = { () => setLogged(true) } /> 
                    : selected === 'Menu'
                        ? <Menu select = { onMenuSelect } close = { closePanel } />
                        : selected === 'Inbox'
                            ? <Inbox back = { () => setSelected('Menu') } />
                            : <Appointments back = { () => setSelected('Menu') } />
                }
            </div>
    	</div>
    );
}

export default Admin;
