import React from 'react';
import './App.css';
import {Route, Link} from "react-router-dom";

import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import PrivateRoute from "./components/PrivateRoute.js"
import Tickets from './components/Tickets.js';
import TicketsQueue from './components/TicketQueue.js'
import AddTicket from './components/AddTicket.js'

function App() {
  const token = localStorage.getItem('token');
  return (
    <div className="App">
      <header className="App-header">
        <Link className="headeris" to="/dashboard"><h1>DevDesk</h1></Link>
        <div className="headerlinks">
        {token && (<div className="links">
          <Link className="add" to='/addticket'>Add Ticket</Link> <p>|</p>
          <Link className="add" to="/queue">All Tickets</Link>  <p>|</p>
          <Link className="add" to="/logout">Logout</Link></div>)}
        </div>
      </header>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/register"><Register /></Route>
      <Route exact path="/login"><Login /></Route>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path='/queue' component={TicketsQueue} />
      <PrivateRoute exact path='/addticket' component={AddTicket} />

    </div>
  );
}

export default App;
