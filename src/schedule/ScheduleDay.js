import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import ScheduleItem from './ScheduleItem'
import ScheduleItemEmpty from './ScheduleItemEmpty';
import './ScheduleDay.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ScheduleDay.css'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export default function ScheduleDay(props) {
  const classes = useStyles();
    let items = []
    for (var i=0;i < props.count;i++)
      items.push(<ScheduleItem name={props.name} key={i}/>)
      
    return (<Col id="scheduleDay">{items}</Col>);
}