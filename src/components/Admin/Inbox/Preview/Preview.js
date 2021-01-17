import React from 'react';

import classes from './Preview.module.scss';

const preview = ({ messages, expand, back }) => {    
    if(messages == null)
        return <h3 className = { classes.Empty }>No new messages!</h3>

    return (
    	<section className = { classes.Preview }>
            <div className = { classes.Meta }>
                <h3 className = { classes.Description }>Name</h3>
                <h3 className = { classes.Description }>Email</h3>
                <h3 className = { classes.Description }>Message</h3>
                <h3 className = { classes.Description }>Date</h3>
            </div>

            <div className = { classes.Messages }>
                { Object.keys(messages).reverse().map((message, index) => {
                        let name = messages[message].name;
                        let contact = messages[message].email;
                        let text = messages[message].message.substring(0, 35);
                        let date = messages[message].time;

                        return (
                            <div className = { classes.Message } onClick = { () => expand(message) } key = { index }>
                                <div className = { classes.Info }><p className = { classes.Text }>{ name }</p></div>
                                <div className = { classes.Info }><p className = { classes.Text }>{ contact }</p></div>
                                <div className = { classes.Info }><p className = { classes.Text }>{ text }</p></div>
                                <div className = { classes.Info }><p className = { classes.Text }>{ date }</p></div>
                            </div>
                        );
                    })
                }
            </div>

        <p className = { classes.Total }>Total messages: { Object.keys(messages).length }</p>
        <button className = { classes.Back } onClick = { back }>{ '< Back' }</button>
    </section>
    );
}

export default preview;
