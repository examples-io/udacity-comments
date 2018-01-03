import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'


// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="foo" component={Foo}/>
                <Route path="bar" component={Bar}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
