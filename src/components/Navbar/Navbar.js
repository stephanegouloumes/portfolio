import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            themeColor: ''
        }

        this.props.history.listen((location, action) => {
            // Updates buttons style when the route changes
            this.updateStyle(location.pathname)
        })
    }

    componentDidMount() {
        // Updates active button when the window is resized
        window.addEventListener('resize', () => this.resizeActiveItem(this.state.themeColor));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeActiveItem);
    }

    componentDidUpdate(oldProps) {
        // Updates active button when locale changes
        if (oldProps.locale !== this.props.locale) {
            this.updateStyle(window.location.pathname)
        }
    }

    updateStyle(location) {
        // Update the navbar theme
        let themeColor = 'is-' + location.slice(1)

        if (themeColor === 'is-') {
            themeColor = 'is-home'
        }

        this.resizeActiveItem(themeColor)

        this.setState({ themeColor })
    }

    // Update the active item background
    resizeActiveItem = (themeColor) => {
        const element = document.getElementById('js-category' + themeColor.slice(2))
        const activeElement = document.getElementById('js-category-active')

        activeElement.style.left = element.offsetLeft + 'px';
        activeElement.style.width = element.offsetWidth - 1 + 'px';
    }

    render() {
        const t = this.props.t
        return (
            <nav className="c-navbar">
                <div className={'c-navbar__list c-navbar__list--left ' + this.state.themeColor}>
                    <NavLink className="c-navbar__item" activeClassName='is-active' id="js-category-home" exact to="/"><span>{t('navbar.home')}</span><i class="fas fa-home"></i></NavLink>
                    <NavLink className="c-navbar__item" activeClassName='is-active' id="js-category-about" to="/about"><span>{t('navbar.about')}</span><i class="fas fa-user"></i></NavLink>
                    <NavLink className="c-navbar__item" activeClassName='is-active' id="js-category-work" to="/work"><span>{t('navbar.work')}</span><i class="fas fa-briefcase"></i></NavLink>
                    <NavLink className="c-navbar__item" activeClassName='is-active' id="js-category-contact" to="/contact"><span>{t('navbar.contact')}</span><i class="fas fa-envelope"></i></NavLink>
                    <div className={'c-navbar__active-item ' + this.state.themeColor} id="js-category-active"></div>
                </div>
                <div className="c-navbar__list c-navbar__list--right">
                    <div className={(this.props.locale === 'fr') ? 'c-navbar__item is-active' : 'c-navbar__item'} onClick={() => this.props.onChangeLocale('fr')}><span>FR</span></div>
                    <span className="c-navbar__item-separator">|</span>
                    <div className={(this.props.locale === 'en') ? 'c-navbar__item is-active' : 'c-navbar__item'} onClick={() => this.props.onChangeLocale('en')}><span>EN</span></div>
                </div>
            </nav>
        )
    }
}

export default withTranslation('translations')(withRouter(Navbar))
