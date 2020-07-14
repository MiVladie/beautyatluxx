import React from 'react';

import { services } from '../../../Services/availableServices';

import classes from './Appointment.module.css';

const appointment = ({ appointment, back, remove }) => {
    let name = appointment.client.name;
    let email = appointment.client.email;
    let bookedAt = new Date(appointment.details.bookingTime);
    let phone = appointment.client.phone;
    let date = new Date(appointment.service.time);
    let payment = appointment.details.payment;
    let listedServices = appointment.service.id.map(service => services.find(s => s.id === +service).name).join(' | ');
    let price = ' £' + (appointment.service.price / 100.00);

    return (
    	<section className = { classes.Appointment }>
            <div className = { classes.Row }>
                <div className = { classes.Description }>
                    <p className = { classes.Name }>Name: <span className = { classes.Text }>{ name }</span></p>
                </div>
                <div className = { classes.Description }>
                    <p className = { classes.Name }>Email: <span className = { classes.Text }>{ email }</span></p>
                </div>
            </div>

            <div className = { classes.Row }>
                <div className = { classes.Description }>
                    <p className = { classes.Name }>Booked At: <span className = { classes.Text }>{ bookedAt.getDate() + '/' + (bookedAt.getMonth() + 1) + '/' + bookedAt.getFullYear() + ' ' + bookedAt.getHours() + ':' + (bookedAt.getMinutes() < 10 ? '0' : '') + bookedAt.getMinutes() }</span></p>
                </div>
                <div className = { classes.Description }>
                    <p className = { classes.Name }>Phone: <span className = { classes.Text }>{ phone }</span></p>
                </div>
            </div>
            
            <div className = { classes.Row }>
                <div className = { classes.Description }>
                    <p className = { classes.Name }>Appointment Date: <span className = { classes.Text }>{ date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() }</span></p>
                </div>
                <div className = { classes.Description }>
                    <p className = { classes.Name }>Payment: <span className = { classes.Text }>{ payment }</span></p>
                </div>
            </div>

            <div className = { classes.Row }>
                <div className = { classes.Description }>
                    <p className = { classes.Name }>Services: <span className = { classes.Text }>{ listedServices }</span></p>
                </div>
                <div className = { classes.Description }>
                    <p className = { classes.Name }>{ payment === 'venue' ? 'Due pay:' : 'Amount paid:' }<span className = { classes.Text }>{ price }</span></p>
                </div>
            </div>

            <div className = { [classes.Row, classes.Action].join(' ') }>
                <button className = { classes.Button } onClick = { back }>{ '< back' }</button>
                <button className = { classes.Button } onClick = { remove }>Delete</button>
            </div>
            
            <div className = { [classes.Row, classes.Response].join(' ') }>
                <button className = { classes.Button} onClick = { () => window.location.assign('mailto:' + email) }>Send email</button>
                <button className = { classes.Button } onClick = { () => window.location.assign('tel:' + phone) }>Call on phone</button>
            </div>
    	</section>
    );
}

export default appointment;
