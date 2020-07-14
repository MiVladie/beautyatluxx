import React, { useState } from 'react';

import classes from './Gallery.module.css';

import image1 from '../../assets/images/banner_01.jpeg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpeg';
import image5 from '../../assets/images/image5.jpeg';
import image6 from '../../assets/images/image6.jpeg';
import image7 from '../../assets/images/salon.jpeg';
import image8 from '../../assets/images/banner_02.jpeg';

import zoom from '../../assets/icons/zoom.png';
import close from '../../assets/icons/close.png';

const Gallery = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8];
    
    const [expand, setExpand] = useState(null);

    const closeModal = (element) => {
        if(element === document.getElementsByClassName(classes.Modal)[0]) {
            document.body.style.overflow = 'auto';
            setExpand(null);
        }
    }

    const openModal = () => {
        if(expand != null) {
            document.body.style.overflow = 'hidden';
            return (      
                <React.Fragment>
                    <div className = { classes.Modal } onClick = { (event) => closeModal(event.target) }>
                        <div className = { classes.Wrapper }>
                            <img src = { expand } alt = 'Beauty Salon Zoomed' />
                            <div className = { classes.Close } onClick = { () => closeModal(document.getElementsByClassName(classes.Modal)[0]) }>
                                <img src = { close } alt = 'Beauty Salon Close' />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            return null;
        } 
    }

    return (
    	<div className = { classes.Gallery }>
    		{ images.map((image, i) => (
                <div className = { classes.Container } key = { i }>
                    <img className = { classes.Image } src = { image } alt = 'Beauty Salon' />
                    <div className = { classes.Zoom } onClick = { () => setExpand(image) }>
                        <img className = { classes.Icon } src = { zoom } alt = 'Beauty Salon Zoom' />
                    </div>
                </div>
            )) }

            { openModal() }
    	</div>
    );
}

export default Gallery;
