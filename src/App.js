import React, { Component } from 'react';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Machine from './components/Machine';
import MR from './components/MarketResearch';
import Music from './components/Music';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Machine />
        <MR />
        <Music />
        <Contact />
      </div>
    );
  }
}

export default App;
