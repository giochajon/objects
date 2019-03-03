import React, { Component } from 'react';
import './App.css';
import MyMenu from "./components/MyMenu"


class App extends Component {
  render() {
    return (
      <div className="App">
         

        
        <header className="App-header">
        <MyMenu />   
         
        </header>
      </div>
    );
  }
}

export default App;
