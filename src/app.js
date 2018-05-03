import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/main'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

const Routes = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
)

render(Routes, document.getElementById('app'))
