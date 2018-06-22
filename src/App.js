import React, { Component } from 'react';
import './App.css';


// import sunSet from './images/sunSet.jpeg'
// import Login from "./LoginPage";
// import Register from "./RegisterPage";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <div className="App">


          <Header/>
          <Main/>




      </div>
    );
  }
}

export default App;
