import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {I18nextProvider} from 'react-i18next'
import i18n from './config/i18n'

import './assets/scss/app.scss'

import App from './components/App/App'

ReactDOM.render(<Router><I18nextProvider i18n={i18n}><App /></I18nextProvider></Router>, document.getElementById('root'))

