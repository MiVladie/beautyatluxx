import React, { useState } from 'react';

import classes from './Testimonials.module.scss';

import arrow from '../../assets/icons/scroll.png';
import star from '../../assets/icons/star.png';

const Testimonials = () => {
    const reviews = [
        { name: 'Karen', text: 'Amazing! Very professional, environment was calm, clean and soothing to be in. The massage was very relaxing, and my face was feeling extremely smooth afterwards.', stars: 5 },
        { name: 'Ashton', text: 'Janet was very kind, welcoming, carried out my treatment so efficiently and results were great. She always maintained my dignity making sure I was covered. She is clearly very experienced. Her studio is beautiful, very clean and welcoming, relaxing and comfortable. Thank you', stars: 5 },
        { name: 'Anonymous', text: 'Great experience with Janet, she is very professional and experienced. Also, I appreciated Janet being very patient with me as she helped me choosing the colour for my shellac.', stars: 5 }
    ];

    const [active, setActive] = useState(1);

    return (
    	<div className = { classes.Testimonials }>
            <div className = { classes.Wrapper }>
                <div className = { classes.Arrow } onClick = { () => setActive(active + 1 <= reviews.length - 1 ? active + 1 : 0) }><img src = { arrow } alt = 'Beauty Salon Ealing Arrow' /></div>
                    { reviews.map((review, i) => (
                        <div className = { [classes.Review, active === i ? classes.Active : ''].join(' ') } onClick = { () => setActive(i) } key = { i }>
                            <div className = { classes.Container }>
                                <h2 className = { classes.Name }>{ review.name }</h2>
                                <p className = { classes.Text }>{ review.text }</p>
                                <div className = { classes.Stars }>
                                    { [...new Array(review.stars)].map((_, index) => 
                                        <img className = { classes.Star } src = { star } alt = 'Beauty Salon Ealing Review' key = { index } />
                                    ) }
                                </div>
                            </div>
                        </div>
                    )) }
                <div className = { classes.Arrow } onClick = { () => setActive(active - 1 >= 0 ? active - 1 : reviews.length - 1) }><img src = { arrow } alt = 'Beauty Salon Ealing Arrow' /></div>
            </div>
    	</div>
    );
}

export default Testimonials;
