import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backendDomain } from '../../../assets/keys';

import Appointment from './Appointment/Appointment';
import Preview from './Preview/Preview';
import Spinner from '../../UI/Spinner/Spinner';

import classes from './Appointments.module.css';

const Appointments = ({ back }) => {
    const [appointments, setAppointments] = useState();
    const [key, setKey] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = () => {
        setLoading(true);

        axios.get(backendDomain + 'admin/beautyatluxx/appointments', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
            .then(response => {
                setAppointments(response.data.appointments);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    }

    const deleteAppointment = () => {
        setLoading(true);
        
        axios.delete(backendDomain + 'admin/beautyatluxx/appointments/' + key, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
            .then(response => {
                setLoading(false);
                setKey(null);

                fetchAppointments();
            })
            .catch(error => {
                setLoading(false);
            });
    }

    return (
    	<div className = { classes.Appointments }>
            { loading 
                ? <Spinner /> 
                : key != null 
                    ? <Appointment 
                        appointment = { appointments[key] }
                        back = { () => setKey(null) } 
                        remove = { deleteAppointment } /> 
                    : <Preview 
                        appointments = { appointments }
                        expand = { setKey }
                        back = { back } /> 
            }
    	</div>
    );
}

export default Appointments;
