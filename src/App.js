import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
          <input type="checkbox" id="nav-check"/>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="nav-links">
            <a href="#allforia">Allforia</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#register">Register</a>
            <a href="#login">Login</a>
          </div>
      </div>
      </div>
      );
    }
    export default App;
