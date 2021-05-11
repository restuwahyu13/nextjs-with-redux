import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reduxReducer from '../reducer'

export default createStore(reduxReducer, applyMiddleware(thunk, logger))
