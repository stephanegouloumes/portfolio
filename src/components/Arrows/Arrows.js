import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Arrows extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pages: ['/', '/about', '/work', '/contact'],
            currentPageIndex: 0
        }
    }

    componentDidMount() {
        this.setState({ currentPageIndex: this.state.pages.indexOf(window.location.pathname) })
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.code === 'ArrowRight') {
            this.clickButton('js-right-arrow')
        } else if (e.code === 'ArrowLeft') {
            this.clickButton('js-left-arrow')
        }
    }

    clickButton(id) {
        let element = document.getElementById(id)

        element.click()

        element.classList.add('is-active')

        setTimeout(() => {
            element.classList.remove('is-active')
        }, 100)
    }

    goBack = () => {
        const newPageIndex = (this.state.currentPageIndex - 1) >= 0 ? (this.state.currentPageIndex - 1) : this.state.pages.length - 1

        this.goTo(newPageIndex)
    }

    goNext = () => {
        const newPageIndex = (this.state.currentPageIndex) < (this.state.pages.length - 1) ? (this.state.currentPageIndex + 1) : 0

        this.goTo(newPageIndex)
    }

    goTo = (pageIndex) => {
        this.setState({ currentPageIndex: pageIndex })
        this.props.history.push(this.state.pages[pageIndex])
    }

    render() {
        return (
            <div className="c-arrows">
                <div className="c-arrows__button" id="js-left-arrow" onClick={this.goBack}><div className="c-arrows__icon"><div className="c-arrows__icon-1"></div><div className="c-arrows__icon-2"></div><div className="c-arrows__icon-3"></div></div></div>
                <div className="c-arrows__button c-arrows__button--right" id="js-right-arrow" onClick={this.goNext}><div className="c-arrows__icon is-reversed"><div className="c-arrows__icon-1"></div><div className="c-arrows__icon-2"></div><div className="c-arrows__icon-3"></div></div></div>
            </div>
        )
    }
}

export default withRouter(Arrows)
