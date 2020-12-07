import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '../reducers/'
import throttle from 'lodash.throttle'

function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch (e) {
		console.log(e)
	}
}

function loadFromLocalStorage() {
	try {
		const serializedState = localStorage.getItem('state')
		if (serializedState == null) return undefined
		return JSON.parse(serializedState)
	} catch (e) {
		console.log(e)
	}
}

const persistedStorage = loadFromLocalStorage()

const store = createStore(
	reducers,
	persistedStorage,
	applyMiddleware(reduxThunk)
)

store.subscribe(
	throttle(() => saveToLocalStorage(store.getState())),
	1000
)

export default store
