import { combineReducers } from 'redux'
import { Task, TaskActions, ITaskActionsRequest } from '../../models/task'

const todoTasks = (state: Task[] = [], action: ITaskActionsRequest): Task[] => {
  switch(action.type){
    case TaskActions.ADD_TASK:
    case TaskActions.UNDO_TASK:
      const id = state.length===0 ? 1 : Math.random()
      return [...state,new Task(id, action.text)]
    case TaskActions.UPDATE_TASK:
      return state.map(t => {
        if(t.id === action.id) t.task = action.text
        return t
      })
    case TaskActions.COMPLETE_TASK:
    case TaskActions.DELETE_TASK:
      return state.filter(t => t.id !== action.id)
  }
  return state
}

const completedTasks = (state: Task[] = [], action: ITaskActionsRequest): Task[] => {
  switch(action.type){
    case TaskActions.COMPLETE_TASK:
      return [...state,new Task(action.id, action.text)]
    case TaskActions.UNDO_TASK:
    case TaskActions.DELETE_TASK:
      return state.filter(t => t.id !== action.id)
  }
  return state
}

const taskList = combineReducers({
  todoTasks,
  completedTasks
})

export default taskList