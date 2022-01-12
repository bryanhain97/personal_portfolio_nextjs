import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} /> */}
            </Routes>
        </BrowserRouter >
    )
}

export default App