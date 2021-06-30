import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chatbot from './Chatbot.component';

function App() {
  return (
    <span>
      <Chatbot />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test to see if the bot is up!
        </p>
      </header>
    </div>
    </span>
  );
}

export default App;
