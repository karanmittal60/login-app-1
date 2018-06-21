import React, { Component } from 'react';
import './App.css';

import sunSet from './images/sunSet.jpeg'
import Login from "./LoginPage";
import Register from "./RegisterPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={sunSet}
                 alt="sun set"
                 width="1800" height="120" 
            />
          <h1 className="App-title">Welcome to Jellyfish Technologies</h1>
        </header>


          <Register/>
          <Login/>


      </div>
    );
  }
}

export default App;
