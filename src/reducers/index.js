/*
  Reducer (index)
*/

// Redux
import { combineReducers } from 'redux'
// Reducer
import { events } from './events'
import { operationLogs } from './operationLogs'

// combineReducers
export const reducer = combineReducers({
  events,
  operationLogs,
})
