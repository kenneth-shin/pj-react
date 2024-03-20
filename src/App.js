import logo from './logo.svg';
import './App.css';
import React from 'react';
import ThisIs from './TitleName';
import ParentComponent from './ParentComponent';

function App(){
  const name = 'Shin';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{name}</div>
        <ThisIs name="this is..." />
        <ThisIs name="Name 2" />
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
