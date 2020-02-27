import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import './ScheduleItem.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    },
  },
}));

export default function ScheduleItemEmpty(props) {
  const classes = useStyles();
    return (
      <div className={classes.root}> 
        <Paper item id="scheduleItemEmpty" elevation={3} variant="outlined">
        </Paper>
        </div>
        );
}