import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Charts from './pages/Charts';
import Student from './pages/Student';
import State from './pages/State';
import College from './pages/College';
import Course from './pages/Course';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/'><Home/></Route>
        <Route exact path = '/charts'><Charts/></Route>
        <Route exact path = '/student/:id'><Student/></Route>
        <Route exact path = '/state/:name'><State/></Route>
        <Route exact path = '/college/:id'><College/></Route>
        <Route exact path = '/course/:name'><Course/></Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
