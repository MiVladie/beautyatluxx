import React from 'react';
import './reset.css';

import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <div className = { classes.Layout }>
            { props.children }
        </div>
    );
}

export default layout;
