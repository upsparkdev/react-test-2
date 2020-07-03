import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Matt's first React App<br/>
          (it really doesn't do much!)
        </p>
        <a
          className="App-link"
          href="mailto:matt@wilkinsdesign.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Matt
        </a>
      </header>
    </div>
  );
}

export default App;
