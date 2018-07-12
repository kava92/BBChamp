import React, { Component } from 'react';
// import logo from './logo.svg';
// import '../style/App.css';

class Timer extends Component {
  render() {
    return (
      <div>
            <button className="reset">reset</button>
            <button className="start-stop">stop</button>
            <p>00:00:00</p>
      </div>
    );
  }
}

export default Timer;