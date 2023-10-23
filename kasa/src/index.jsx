import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header'
import Error from './components/Error'
import About from './pages/About/About'
import Rental from './pages/Rental/Rental'
import Footer from './components/Footer'
import { createGlobalStyle } from 'styled-components'

const container = document.getElementById('root')
const root = createRoot(container)

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', Helvetica, sans-serif;
        box-sizing: border-box;
    }
    body {
        margin: 0;
    }
`

root.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/rentals/:id" element={<Rental />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
