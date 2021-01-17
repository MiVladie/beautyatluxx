import React, { useState, useEffect } from 'react';

import classes from './Banner.module.scss';

import banner_01 from '../../assets/images/banner_01.jpeg';
import banner_02 from '../../assets/images/banner_02.jpeg';
import banner_03 from '../../assets/images/banner_03.jpeg';

const Banner = () => {
    const [active, setActive] = useState(1);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActive(active + 1 <= 3 ? active + 1 : 1);
        }, 7000);

        return () => clearInterval(interval);
    });

    return (
    	<div className = { classes.Banner }>
            <div className = { classes.Main }>
                <div className = { classes.Holder }>
                    <div className = { classes.Text }>
                        <h2>the best</h2>
                        <h1>Beauty &<br/>Hair Salon</h1>
                        <div className = { classes.Line } />
                        <p>Our qualified expert provides a full range of services to meet all customer needs.</p>
                        <a href = 'https://www.treatwell.co.uk/place/beauty-at-luxx-hair/' target = '_blank' rel = 'noopener noreferrer'>Book now</a>
                    </div>

                    <div className = { classes.Images }>
                        <img className = { [classes.Image, active === 1 ? classes.Active : '', active === 3 ? classes.Hidden : ''].join(' ') } src = { banner_01 } alt = 'Beaty Salon' />
                        <img className = { [classes.Image, active === 2 ? classes.Active : '', active === 1 ? classes.Hidden : ''].join(' ') } src = { banner_02 } alt = 'Beaty Salon' />
                        <img className = { [classes.Image, active === 3 ? classes.Active : '', active === 2 ? classes.Hidden : ''].join(' ') } src = { banner_03 } alt = 'Beaty Salon' />
                    </div>
                </div>        

                <div className = { classes.Dots }>
                    <div className = { [classes.Dot, active === 1 ? classes.Active : ''].join(' ') } onClick = { () => setActive(1) } />
                    <div className = { [classes.Dot, active === 2 ? classes.Active : ''].join(' ') } onClick = { () => setActive(2) } />
                    <div className = { [classes.Dot, active === 3 ? classes.Active : ''].join(' ') } onClick = { () => setActive(3) } />
                </div>        
            </div>
            
            <a className = { classes.Scroll } href = '#about'><div className = { classes.Arrow } /></a>
    	</div>
    );
}

export default Banner;
