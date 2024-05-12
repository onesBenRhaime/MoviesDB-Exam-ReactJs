
import {applyMiddleware, combineReducers, createStore} from 'redux'
import { counterReducer } from './reducers'
import logger from 'redux-logger';
import { eventReducer } from './eventReducer';
const reducers = combineReducers({
    count: counterReducer,
    event:eventReducer
})
export default createStore(reducers,applyMiddleware(logger));