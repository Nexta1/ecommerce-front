import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
export const history = createBrowserHistory()

const store = createStore(createRootReducer(history), applyMiddleware(routerMiddleware(history)))
export default store
