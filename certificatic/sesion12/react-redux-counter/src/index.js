import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './views/App'
import counter from './reducers'
import * as serviceWorker from './serviceWorker'

const store = createStore(counter)

const render = () => ReactDOM.render(<App store={store}/>, document.getElementById('root'));

render()
store.suscribe(render)

serviceWorker.unregister();