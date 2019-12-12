import { combineReducers } from 'redux'
import todoTasks from './task'

export default combineReducers({
  tasks: todoTasks,
})