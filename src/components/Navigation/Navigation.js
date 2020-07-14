import React, { useState, useEffect } from 'react';

import classes from './Navigation.module.css';

const Navigation = () => {
    const [expand, setExpand] = useState(false);
    
    useEffect(() => {
        if(!expand) document.body.style.overflow = 'visible';
        else document.body.style.overflow = 'hidden';
    }, [expand]);

    const expandMenuHandler = (event) => {
        event.preventDefault();

        setExpand(!expand);
    }

    return (
    	<nav className = { [classes.Navigation, expand ? classes.Expand : ''].join(' ') }>
            <div className = { classes.Container }>
                <div className = { classes.Hide } />

                <ul className = { classes.Links }>
                    <li><a className = { classes.Link } href = '#' onClick = { () => setExpand(false) }>Home</a></li>
                    <li><a className = { classes.Link } href = '#about' onClick = { () => setExpand(false) }>About</a></li>
                    <li><a className = { classes.Link } href = '#services' onClick = { () => setExpand(false) }>Services</a></li>
                    <li><a className = { classes.Logo } href = '#' onClick = { () => setExpand(false) }> </a></li>
                    <li><a className = { classes.Link } href = '#gallery' onClick = { () => setExpand(false) }>Gallery</a></li>
                    <li><a className = { classes.Link } href = '#testimonials' onClick = { () => setExpand(false) }>Testimonials</a></li>
                    <li><a className = { classes.Link } href = '#contact' onClick = { () => setExpand(false) }>Contact</a></li>
                </ul>

                <button className = { classes.Menu } onClick = { (event) => expandMenuHandler(event) } />
            </div>            
        </nav>
    );
}

export default Navigation;
