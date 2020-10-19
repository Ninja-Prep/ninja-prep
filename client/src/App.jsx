import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AllCategories from './views/AllCategories'
import { Home } from './views/Home'
import ProblemTemplate from './views/ProblemTemplate'
import rootReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
	return (
		<div>
			<Provider store={store}>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/all-categories" exact component={AllCategories} />
						<Route path="/problem/:name" exact component={ProblemTemplate} />
					</Switch>
				</Router>
			</Provider>
		</div>
	)
}
export default App
