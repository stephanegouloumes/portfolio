import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import {I18nextProvider} from 'react-i18next'
import i18n from './config/i18n'

import './assets/scss/app.scss'

import App from './components/App/App'

ReactDOM.render(<I18nextProvider i18n={i18n}><App /></I18nextProvider>, document.getElementById('root'))

serviceWorker.unregister()
