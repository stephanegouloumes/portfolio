import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Arrows extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pages: ['/', '/about', '/work', '/contact'],
            currentPageIndex: 0,
            leftArrowDisabled: false,
            rightArrowDisabled: false
        }

        this.props.history.listen((location, action) => {
            this.setState({ currentPageIndex: this.state.pages.indexOf(location.pathname) }, this.checkArrowVisibility)
        })
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);

        this.setState({ currentPageIndex: this.state.pages.indexOf(window.location.pathname) }, this.checkArrowVisibility)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.code === 'ArrowRight' && ! this.state.rightArrowDisabled) {
            this.clickButton('js-right-arrow')
        } else if (e.code === 'ArrowLeft' && ! this.state.leftArrowDisabled) {
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
        this.setState({ currentPageIndex: pageIndex }, this.checkArrowVisibility)
        this.props.history.push(this.state.pages[pageIndex])
    }

    checkArrowVisibility = () => {
        if (this.state.pages[this.state.currentPageIndex] === '/') {
            this.setState({ leftArrowDisabled: true })
        } else if (this.state.leftArrowDisabled) {
            this.setState({ leftArrowDisabled: false })
        }
    }

    render() {
        return (
            <div className="c-arrows">
                { ! this.state.leftArrowDisabled &&
                    <div className="c-arrows__button" id="js-left-arrow" onClick={this.goBack}>
                        <div className="c-arrows__icon">
                            <div className="c-arrows__icon-1"></div><div className="c-arrows__icon-2"></div><div className="c-arrows__icon-3"></div>
                        </div>
                    </div>
                }
                { ! this.state.rightArrowDisabled &&
                    <div className={"c-arrows__button c-arrows__button--right" + (this.state.leftArrowDisabled ? " is-green" : "")} id="js-right-arrow" onClick={this.goNext}>
                        <div className="c-arrows__icon is-reversed">
                            <div className="c-arrows__icon-1"></div><div className="c-arrows__icon-2"></div><div className="c-arrows__icon-3"></div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(Arrows)
