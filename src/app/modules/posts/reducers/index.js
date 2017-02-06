import { combineReducers } from 'redux'
import config from './config'
import list from './list'

const rootReducer = combineReducers({config, list})

export default rootReducer
