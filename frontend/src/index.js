import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './reducer'

const element = document.getElementById('root')

if (element instanceof HTMLElement) { // eslint-disable-line
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )

  if (process.env.NODE_ENV === 'development') {
    console.info('New App [render]') //eslint-disable-line
  }

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    element
  )
} else {
  throw new Error(`No HTML element found with ID "root"`)
}
