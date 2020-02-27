import React from 'react';
import Sidebar from './sidebar/Sidebar'
import ScheduleItem from './schedule/ScheduleItem' 


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ScheduleList from './schedule/ScheduleList';

class App extends React.Component {
  render() {
  return (
    <Router>
      <div class="page-wrapper"> 
      <Switch>
        <Route path="/schedule">
          <Sidebar name="prop name"/>
          <ScheduleList />
        </Route>
        <Route path="">
          <Sidebar name="prop name"/>
          <div style={{"margin-left":"100px"}}>HOME PAG1E</div>
        </Route>
      </Switch>
      </div>
    </Router>
    );
}
}

export default App;
