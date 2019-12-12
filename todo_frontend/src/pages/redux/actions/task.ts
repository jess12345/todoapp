import { TaskActions, ITaskActionsRequest } from '../../../models/task'

export const addTask = (text: string): ITaskActionsRequest => {
  return {
    type: TaskActions.ADD_TASK,
    text
  }
}

export const deleteTask = (id: number): ITaskActionsRequest => {
  return {
    type: TaskActions.DELETE_TASK,
    id
  }
}

export const updateTask = (id: number, text: string): ITaskActionsRequest => {
  return {
    type: TaskActions.UPDATE_TASK,
    id,
    text
  }
}

export const completeTask = (id: number): ITaskActionsRequest => {
  return {
    type: TaskActions.COMPLETE_TASK,
    id
  }
}

export const undoTask = (id: number): ITaskActionsRequest => {
  return {
    type: TaskActions.UNDO_TASK,
    id
  }
}