import { TaskActionsEnum, ITaskActionsRequest } from '../../../models/task'

const TaskAction = {
  addTask: (text: string): ITaskActionsRequest => {
    return {
      type: TaskActionsEnum.ADD_TASK,
      text
    }
  },
  deleteTask: (id: number): ITaskActionsRequest => {
    return {
      type: TaskActionsEnum.DELETE_TASK,
      id
    }
  },
  updateTask: (id: number, text: string): ITaskActionsRequest => {
    return {
      type: TaskActionsEnum.UPDATE_TASK,
      id,
      text
    }
  },
  completeTask: (id: number): ITaskActionsRequest => {
    return {
      type: TaskActionsEnum.COMPLETE_TASK,
      id
    }
  },
  undoTask: (id: number): ITaskActionsRequest => {
    return {
      type: TaskActionsEnum.UNDO_TASK,
      id
    }
  },
  refreshTask: (id: number): ITaskActionsRequest => {
    return {
      type: TaskActionsEnum.REFRESH_TASK,
      id
    }
  }
}

export default TaskAction