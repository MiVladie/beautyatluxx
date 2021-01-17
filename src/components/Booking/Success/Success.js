import React from 'react';

import classes from './Success.module.scss';

const Success = ({ success, email }) => {
    return (
    	<div className = { classes.Success }>
            <div className = { classes.Main }>
                <div className = { classes.Meta }>
                    <h2 className = { classes.Text }>Congratulations!</h2>
                </div>

                <div className = { classes.Tick } />

                <div className = { classes.Description }>
                    <p className = { classes.Info }>An email with the appointment details was sent to: <span>{ email }</span></p>
                </div>
            </div>

            <div className = { classes.Submit }>
                <button className = { classes.Button } onClick = { success }>Done</button>
            </div>
        </div>
    );
}

export default Success;
