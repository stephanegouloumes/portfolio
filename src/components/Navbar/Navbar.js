import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            themeColor: '',
            lang: 'en'
        }

        this.props.history.listen((location, action) => {
            this.updateStyle(location.pathname)
        })
    }

    componentDidMount() {
        this.updateStyle(window.location.pathname)
    }

    updateStyle(location) {
        // Update the navbar theme
        let themeColor = 'is-' + location.slice(1)

        if (themeColor === 'is-') {
            themeColor = 'is-home'
        }

        this.setState({ themeColor })

        // Update the active item background
        const element = document.getElementById('js-category' + themeColor.slice(2))
        const activeElement = document.getElementById('js-category-active')

        activeElement.style.left = element.offsetLeft + 'px';
        activeElement.style.width = element.offsetWidth - 1 + 'px';
    }

    changeLang = (lang) => {
        this.setState({ lang })
        this.props.i18n.changeLanguage(lang)

        // BUG
        this.updateStyle(window.location.pathname)
    }

    render() {
        console.log(this.state.lang === 'en' ? 'is-active' : '')
        const t = this.props.t
        return (
            <nav className="c-navbar">
                <div className={'c-navbar__list c-navbar__list--left ' + this.state.themeColor}>
                    <NavLink className="c-navbar__item" activeClassName='is-active' id="js-category-home" exact to="/"><span>{t('navbar.home')}</span></NavLink>
                    <NavLink className="c-navbar__item" activeClassName='is-active' id="js-category-about" to="/about"><span>{t('navbar.about')}</span></NavLink>
                    <NavLink className="c-navbar__item" activeClassName='is-active' id="js-category-work" to="/work"><span>{t('navbar.work')}</span></NavLink>
                    <NavLink className="c-navbar__item" activeClassName='is-active' id="js-category-contact" to="/contact"><span>{t('navbar.contact')}</span></NavLink>
                    <div className={'c-navbar__active-item ' + this.state.themeColor} id="js-category-active"></div>
                </div>
                <div className="c-navbar__list c-navbar__list--right">
                    <div className={(this.state.lang === 'fr') ? 'c-navbar__item is-active' : 'c-navbar__item'} onClick={() => this.changeLang('fr')}><span>FR</span></div>
                    <span className="c-navbar__item-separator">|</span>
                    <div className={(this.state.lang === 'en') ? 'c-navbar__item is-active' : 'c-navbar__item'} onClick={() => this.changeLang('en')}><span>EN</span></div>
                </div>
            </nav>
        )
    }
}

export default withTranslation('translations')(withRouter(Navbar))
