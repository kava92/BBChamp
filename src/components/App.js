import React, { Component } from 'react';
import Scoreboard from './Scoreboard.js';
import Timer from './Timer.js';
import NavBar from './NavBar.js';

// import logo from './logo.svg';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Match number 1</h1>
        <div className="scoreboard-container">
          <Scoreboard className="scoreboard"/>
          <Scoreboard className="scoreboard"/>
        </div>
        <div className="timer-container">
          <Timer />
        </div>
        <div className="navbar-container">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;
