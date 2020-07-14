import React from 'react';

import { services } from '../../../Services/availableServices';

import classes from './Preview.module.css';

const preview = ({ appointments, expand, back }) => {
    const allAppointments = Object.keys(appointments)
        .map(appointment => { 
            return {
                key: appointment,
                name: appointments[appointment].client.name,
                payment: appointments[appointment].details.payment,
                service: services.find(s => s.id === appointments[appointment].service.id[0]).name.substring(0, 35), 
                date: new Date(appointments[appointment].service.time)
            }
        })
        .filter(appointment => appointment.date.getTime() >= new Date().getTime())
        .sort((a, b) => a.date - b.date);

    if(allAppointments == null || allAppointments.length === 0)
        return <h3 className = { classes.Empty }>No new appointments!</h3>

    return (
    	<section className = { classes.Preview }>
            <div className = { classes.Meta }>
                <h3 className = { classes.Description }>Name</h3>
                <h3 className = { classes.Description }>Payment</h3>
                <h3 className = { classes.Description }>Service</h3>
                <h3 className = { classes.Description }>Date</h3>
            </div>

            <div className = { classes.Appointments }>
                { allAppointments.map((appointment, index) => 
                    <div className = { classes.Appointment } onClick = { () => expand(appointment.key) } key = { index }>
                        <div className = { classes.Info }><p className = { classes.Text }>{ appointment.name }</p></div>
                        <div className = { classes.Info }><p className = { classes.Text }>{ appointment.payment }</p></div>
                        <div className = { classes.Info }><p className = { classes.Text }>{ appointment.service }</p></div>
                        <div className = { classes.Info }><p className = { classes.Text }>{ appointment.date.getDate() + '/' + (appointment.date.getMonth() + 1) + '/' + appointment.date.getFullYear() + ' ' + appointment.date.getHours() + ':' + (appointment.date.getMinutes() < 10 ? '0' : '') + appointment.date.getMinutes() }</p></div>
                    </div>
                )}
            </div>

            <p className = { classes.Total }>Total appointments: { allAppointments.length }</p>
            <button className = { classes.Back } onClick = { back }>{ '< Back' }</button>
        </section>
    );
}

export default preview;
