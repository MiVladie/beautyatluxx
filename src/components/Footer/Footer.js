import React, { useState } from 'react';

import Admin from '../../containers/Admin/Admin';

import logo from '../../assets/icons/logo.png';
import classes from './Footer.module.scss';

const Footer = () => {
    const [admin, setAdmin] = useState(false);
    
    const switchAdmin = () => {
        document.body.style.overflow = !admin ? 'hidden' : 'visible';
        setAdmin(!admin);
    }

    const closePanel = () => {
        document.body.style.overflow = 'auto';
        setAdmin(false);
    }

    return (
    	<div className = { classes.Footer }>
            <div className = { classes.Wrapper }>
                <img className = { classes.Logo } src = { logo } alt = 'Beauty Salon Ealing Logo' />
                <div className = { classes.Content }>
                    <p>Copyright Beauty at Luxx &copy; { new Date().getFullYear() } <br className = { classes.Break } />All Rights Reserved</p>
                    <p>Website created by <span><a href = 'https://letscomit.com/' target = '_blank' rel = 'noopener noreferrer'>letscomit</a></span></p>
                </div>
                <button className = { classes.Admin } onClick = { switchAdmin }>Admin</button>
            </div>

            { admin ? <Admin closePanel = { () => closePanel() } /> : null }
    	</div>
    );
}

export default Footer;
