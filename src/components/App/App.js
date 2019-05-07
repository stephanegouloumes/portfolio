import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import detectBrowserLanguage from 'detect-browser-language'

import Arrows from '../Arrows/Arrows'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            locale: ''
        }
    }

    componentDidMount() {
        this.getUserLocale()
    }

    /**
     * Get the user's browser locale and updates the app locale
     * Stores it in local storage
     */
    getUserLocale = () => {
        let browserLocale = null

        if (localStorage.getItem('user_locale') === null) {
            browserLocale = detectBrowserLanguage().split('-')[0].toLowerCase()
        } else {
            browserLocale = localStorage.getItem('user_locale')
        }

        this.changeLocale(browserLocale)
    }

    changeLocale = (locale) => {
        this.props.i18n.changeLanguage(locale)
        localStorage.setItem('user_locale', locale)
        this.setState({ locale })
    }

    render() {
        return (
            <Router>
                <div className="c-app">
                    <Arrows />
                    <Navbar locale={this.state.locale} onChangeLocale={this.changeLocale} />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/work" component={Work}></Route>
                        <Route path="/contact" component={Contact}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default withTranslation('translations')(App)
