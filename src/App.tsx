import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </div>
    )
}

export default App
