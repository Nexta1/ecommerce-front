import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { history } from './store'
import BrowserRoutes from './Routes'
import store from './store'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRoutes />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>
)
