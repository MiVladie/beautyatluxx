import React from 'react';

import classes from './Section.module.css';

const section = (props) => {
    return (
    	<section className = { classes.Section } id = { props.id }>
    		<div className = { classes.Main }>
                <h1 className = { classes.Meta }>{ props.meta }</h1>
                <h1 className = { classes.Name }>{ props.name }</h1>                
                <div className = { classes.Line } />
                <p className = { classes.Description }>{ props.description }</p>
            </div>

            { props.children }
    	</section>
    );
}

export default section;
