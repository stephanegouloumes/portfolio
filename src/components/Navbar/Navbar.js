import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="c-navbar">
            <div className="c-navbar__list c-navbar__list--left">
                <NavLink to="/"><span className="c-navbar__item">HOME</span></NavLink>
                <NavLink to="/about"><span className="c-navbar__item">ABOUT</span></NavLink>
                <NavLink to="/work"><span className="c-navbar__item">WORK</span></NavLink>
                <NavLink to="/contact"><span className="c-navbar__item">CONTACT</span></NavLink>
            </div>
            <div className="c-navbar__list c-navbar__list--right">
                <NavLink to="/"><span className="c-navbar__item">FR</span></NavLink>
                <span className="c-navbar__item">|</span>
                <NavLink to="/"><span className="c-navbar__item">EN</span></NavLink>
            </div>
        </nav>
    )
}

export default Navbar
