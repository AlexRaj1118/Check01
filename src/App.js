import React, { Component } from 'react';
import Calorie from './components/CarlorieCalc'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calorie />
      </div>
    );
  }
}

export default App;
