import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_DOMAIN } from '../../../config/constants';

import Appointment from './Appointment/Appointment';
import Preview from './Preview/Preview';
import Spinner from '../../UI/Spinner/Spinner';

import classes from './Appointments.module.scss';

const Appointments = ({ back }) => {
    const [appointments, setAppointments] = useState();
    const [key, setKey] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = () => {
        setLoading(true);

        axios.get(BACKEND_DOMAIN + 'admin/beautyatluxx/appointments', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
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
        
        axios.delete(BACKEND_DOMAIN + 'admin/beautyatluxx/appointments/' + key, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
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
