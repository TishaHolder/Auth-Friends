import React, {useState} from "react";
import {Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import axios from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import LoginForm from "./components/LoginForm.js";
import Dashboard from "./components/Dashboard.js";
import PrivateRoute from "./components/PrivateRoute.js";




function App() {

  

  return (

    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>

      <Route exact path ="/" component = {LoginForm} />      
      <PrivateRoute path='/dashboard' component={Dashboard} />

    </div>
  );
}

export default App;
