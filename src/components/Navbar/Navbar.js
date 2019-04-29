import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="c-navbar">
            <div className="c-navbar__list c-navbar__list--left">
                <NavLink className="c-navbar__item" activeClassName='is-active' exact to="/"><span>HOME</span></NavLink>
                <NavLink className="c-navbar__item" activeClassName='is-active' to="/about"><span>ABOUT</span></NavLink>
                <NavLink className="c-navbar__item" activeClassName='is-active' to="/work"><span>WORK</span></NavLink>
                <NavLink className="c-navbar__item" activeClassName='is-active' to="/contact"><span>CONTACT</span></NavLink>
            </div>
            <div className="c-navbar__list c-navbar__list--right">
                <NavLink className="c-navbar__item" to="/fr"><span>FR</span></NavLink>
                <span className="c-navbar__item">|</span>
                <NavLink className="c-navbar__item is-active" to="/en"><span>EN</span></NavLink>
            </div>
        </nav>
    )
}

export default Navbar
