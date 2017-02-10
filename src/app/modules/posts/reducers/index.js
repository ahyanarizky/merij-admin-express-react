import { combineReducers } from 'redux'
import config from './config'
import list from './list'
import detail from './detail'

const rootReducer = combineReducers({config, list, detail})

export default rootReducer
