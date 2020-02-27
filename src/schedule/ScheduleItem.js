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
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ScheduleItem(props) {
  const classes = useStyles();
    return (
      <div className={classes.root} id="scheduleItem">
      <Paper className={classes.paper}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>10.00-10.50</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>1200Р</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Имя Клиента</Paper>
        </Grid>
      </Grid>
      </Paper>
    </div>
        );
}