import React from 'react'
import './ScheduleList.css'
import ScheduleDay from './ScheduleDay';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sidebar from'../sidebar/Sidebar'

export default function ScheduleList(props) {
    return (     
        <Container id="container">
            <Row >
              <Col>
                <Sidebar></Sidebar>
              </Col>
              <Col lg={12}>
              <Row id="scheduleList">
                <ScheduleDay count="3" name="1"/> 
                <ScheduleDay count="4" name="2"/> 
                <ScheduleDay count="3" name="3"/> 
                <ScheduleDay count="8" name="4"/> 
                <ScheduleDay count="6" name="5"/> 
                <ScheduleDay count="6" name="6"/> 
                <ScheduleDay count="2" name="7"/> 
              </Row>
              </Col>
            </Row>
        </Container>
        );
}