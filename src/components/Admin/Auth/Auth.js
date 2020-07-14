import React, { useState } from 'react';
import axios from 'axios';
import { backendDomain } from '../../../assets/keys';

import Spinner from '../../UI/Spinner/Spinner';

import classes from './Auth.module.css';

const isEmailAddress = (str) => {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);
}

const Auth = ({ success }) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        if(credentials.email === '' || credentials.password === '') { 
            setResult('Please, fill in all required fields.');           
            setLoading(false);            
        } else if(!isEmailAddress(credentials.email)) {
            setResult('Please, provide a valid email address.');        
            setLoading(false);   
        } else {
            axios.post(backendDomain + 'admin/beautyatluxx', { credentials: credentials })
                .then(response => {
                    setLoading(false);

                    const token = response.data.token;
                    const expirationDate = response.data.expirationDate;

                    localStorage.setItem('token', token);
                    localStorage.setItem('expirationDate', expirationDate);

                    success();
                })
                .catch(error => {
                    setLoading(false);
                    setCredentials({ email: credentials.email, password: '' });                    
                    setResult(error.response ? error.response.data.message : 'Something went wrong!');
                });
        }
    }

    return (
    	<form className = { classes.Auth }>
            { loading && <div className = { classes.Modal }><Spinner /></div> }
            
            <div className = { classes.Input }>
                <input className = { classes.Field } value = { credentials.email } onChange = { (event) => setCredentials({ ...credentials, email: event.target.value }) } type = 'email' placeholder = 'Email' />
            </div>
            
            <div className = { classes.Input }>
                <input className = { classes.Field } value = { credentials.password } onChange = { (event) => setCredentials({ ...credentials, password: event.target.value }) } type = 'password' placeholder = 'Password' />
            </div>

            { result && <p className = { classes.Result }>{ result }</p> }

            <button className = { classes.Send } type = 'submit' onClick = { onSubmit }>Login</button>
        </form>
    );
}

export default Auth;
