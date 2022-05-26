import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Parallax, Background } from 'react-parallax';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('./assets/Macarons.jpg')}
        // bgImageAlt="the dog"
        strength={-200}
       >
        <div className="parallax align-middle flex justify-center text-tahiti">
          <div className = "parallax-text  text-blue">HTML inside the parallax</div>
          <p className="text-blue-50" >HEllo World </p>
        </div>
      </Parallax>
      
        <p>
          Sinfully Sweet Treats <br></br> by Amanda
        </p>
      </header>
    </div>
  );
}

export default App;
