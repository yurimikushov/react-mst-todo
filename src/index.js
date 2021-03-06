import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from './store'
import './index.scss'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.querySelector('.app')
)
