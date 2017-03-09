import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SVG from 'svg.js';
import 'svg.draggable.js';

class App extends Component {

  componentDidMount() {

    var d = SVG('canvas').size(window.innerWidth - 20, window.innerHeight - 20)
    var rect = d.rect(100, 100);
    rect.draggable().on('dragend', function(e){
      // e.preventDefault()
      // this.move(e.detail.p.x, e.detail.p.y)
      console.log('end', this.attr())
    });

  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <svg id="canvas" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"></svg>
      </div>
    );
  }
}

export default App;
