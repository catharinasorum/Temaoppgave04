import React from 'react'
import {Link, Router} from '@reach/router'
import '../App.css'
import './Header.css'
import Home from './pages/Home'
import About from './pages/About'
import Bookings from './pages/Bookings'
import Contact from './pages/Contact'
import Services from './pages/Services'

const Main = () => {
    return (
        <>
        <div className='header'>
            <h1>Tina's Beauty Saloon</h1>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='services'>Services</Link>
                <Link to='about'>About Our Saloon</Link>
                <Link to='bookings'>Bookings</Link>
                <Link to='contact'>Contact</Link>
            </nav>
        </div>
        <main>
        <Router>
            <Home path='/' />
            <Services path='services' />
            <About path='about' />
            <Bookings path='bookings' />
            <Contact path='contact' />
        </Router>
        </main>
        </>
    )
}

export default Main