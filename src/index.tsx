import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import BestSellers from './components/BestSellers/BestSellers'
import Reviews from './components/Reviews/Reviews'
import NavBar from './components/NavBar/NavBar'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="bestseller" element={<BestSellers />} />
                <Route path="reviews" element={<Reviews />} />
            </Routes>
            {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
        </React.StrictMode>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
