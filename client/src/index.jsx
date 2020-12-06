import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './configuration/store'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
