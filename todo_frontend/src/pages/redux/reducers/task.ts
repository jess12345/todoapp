import { Task, TaskActions, ITaskActionsRequest, TaskProgress } from '../../../models/task'

const todoTasks = (state: Task[] = [], action: ITaskActionsRequest): Task[] => {
  switch(action.type){

    case TaskActions.ADD_TASK:
    case TaskActions.UNDO_TASK:
      if( !action.text ) break;
      const id = state.length===0 ? 1 : Math.random()
      return [...state,new Task(id, action.text)]

    case TaskActions.UPDATE_TASK:
      if( !action.text ) break;
      const task = action.text
      return state.map(t => {
        if(t.id === action.id) t.task = task
        return t
      })

    case TaskActions.COMPLETE_TASK:
      if( !action.id ) break;
      return state.map(t => {
        if(t.id === action.id) t.progress = TaskProgress.DONE
        return t
      })

    case TaskActions.UNDO_TASK:
      if( !action.id ) break;
      return state.map(t => {
        if(t.id === action.id) t.progress = TaskProgress.TODO
        return t
      })

    case TaskActions.DELETE_TASK:
      return state.filter(t => t.id !== action.id)

  }
  return state
}

export default todoTasks