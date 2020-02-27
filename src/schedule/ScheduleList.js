import React from 'react'
import Grid from '@material-ui/core/Grid';
import './ScheduleList.css'
import ScheduleDay from './ScheduleDay';

export default function ScheduleList(props) {
    return (
        <Grid container id="scheduleList">
            <ScheduleDay /> 
            <ScheduleDay /> 
            <ScheduleDay /> 
            <ScheduleDay /> 
            <ScheduleDay /> 
        </Grid>
        );
}