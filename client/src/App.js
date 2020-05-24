import React from 'react';
import './App.css';
import {Route, Link} from "react-router-dom";

import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import PrivateRoute from "./components/PrivateRoute.js"

function App() {
  const token = localStorage.getItem('token');
  return (
    <div className="App">
      <header className="App-header">
        <h1>DevDesk</h1>
        <div className="links">
        {token && (<div className="links"><Link className="add" to='/addticket'>+</Link></div>)}
        </div>
      </header>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/register"><Register /></Route>
      <Route exact path="/login"><Login /></Route>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
