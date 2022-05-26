import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <p>
          Sinfully Sweet Treats by Amanda
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
