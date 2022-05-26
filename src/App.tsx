import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </div>
    )
}

export default App
