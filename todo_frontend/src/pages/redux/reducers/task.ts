import { Task, TaskActionsEnum, ITaskActionsRequest, TaskProgressEnum } from '../../../models/task'

const todoTasks = (state: Task[] = [], action: ITaskActionsRequest): Task[] => {
  switch(action.type){

    case TaskActionsEnum.ADD_TASK:
      console.log("adding task...",action.id)
      if( !action.text ) break;
      const id = state.length===0 ? 1 : Math.random()
      return [...state,new Task(id, action.text)]

    case TaskActionsEnum.UPDATE_TASK:
      console.log("updating task...",action.id)
      if( !action.text ) break;
      const task = action.text
      return state.map(t => {
        if(t.id === action.id) t.task = task
        return t
      })

    case TaskActionsEnum.COMPLETE_TASK:
      console.log("completing task...",action.id)
      if( !action.id ) break;
      return state.map(t => {
        if(t.id === action.id) t.progress = TaskProgressEnum.DONE
        return t
      })

    case TaskActionsEnum.UNDO_TASK:
      console.log("undoing task...",action.id)
      if( !action.id ) break;
      return state.map(t => {
        if(t.id === action.id) t.progress = TaskProgressEnum.TODO
        return t
      })

    case TaskActionsEnum.DELETE_TASK:
      console.log("deleting task...",action.id)
      return state.filter(t => t.id !== action.id)

  }
  return state
}

export default todoTasks