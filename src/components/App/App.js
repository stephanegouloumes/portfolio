import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Arrows from '../Arrows/Arrows'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="c-app">
                    <Arrows />
                    <Navbar />
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

export default App
