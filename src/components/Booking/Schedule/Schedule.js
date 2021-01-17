import React, { useState } from 'react';

import classes from './Schedule.module.scss';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Schedule = ({ schedule, success }) => {
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedTime, setSelectedTime] = useState();
    const [week, setWeek] = useState(0);

    const selectWeekHandler = (week) => {
        setWeek(week);
        setSelectedDay(1);
    };

    const selectDayHandler = (day) => {
        setSelectedDay(day);
        setSelectedTime(null);
    };

    const selectTimeHandler = (time) => {
        setSelectedTime(time);
    };

    const onSubmitHandler = () => {
        success(selectedTime);
    };
    
    const weekDate = () => {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() + week * 7);

        let result = [];

        for (let i = 0; i < 7; i++) {
            let addedDate = new Date(weekStart);
            addedDate.setDate(addedDate.getDate() + i);

            result.push(new Date(addedDate));
        }

        return result;
    };
    
    return (
    	<div className = { classes.Schedule }>
            <div className = { classes.Main }>
                <div className = { classes.Month }>
                    <button className = { classes.Previous } onClick = { () => selectWeekHandler(week - 1) } disabled = { week - 1 < 0 }><div className = { classes.Arrow } /></button>
                    <h2 className = { classes.Text }>{ monthNames[weekDate()[0].getMonth()] } { weekDate()[0].getFullYear() }</h2>
                    <button className = { classes.Next } onClick = { () => selectWeekHandler(week + 1) } disabled = { week + 1 > 11 }><div className = { classes.Arrow } /></button>
                </div>

                <div className = { classes.Days }>
                    { weekDate().map((day, i) => 
                        <div className = { classes.Day } onClick = { () => selectDayHandler(i) } key = { i }>
                            <p className = { classes.Name }>{ weekNames[day.getDay()] }</p>
                            <span className = { [classes.Number, i === selectedDay ? classes.ActiveDay : ''].join(' ') }>{ day.getDate() }</span>
                        </div>) }
                </div>
            
                <div className = { classes.Line } />

                <div className = { classes.Options }>
                    { schedule[week][selectedDay].length === 0 ? <div className = { classes.Unavailable }><p className = { classes.Text }>Sorry, there are no available slots.<br/>Please, select another day.</p></div> : schedule[week][selectedDay].map(time => 
                        <div className = { [classes.Option, selectedTime === time ? classes.ActiveTime : ''].join(' ') } onClick = { () => selectTimeHandler(time) } key = { time }>
                            <p className = { classes.Time }>{ ('0' + new Date(time).getHours()).slice(-2) + ":" + ('0' + new Date(time).getMinutes()).slice(-2) }</p>
                            <p className = { classes.Select }>Select</p>
                            <div className = { classes.Tick } />
                    </div>) }
                </div>
            </div>

            <button className = { classes.Submit } onClick = { onSubmitHandler } disabled = { selectedTime == null }>Continue</button>
    	</div>
    );
}

export default Schedule;
