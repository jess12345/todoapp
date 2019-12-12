export class Task {
  id?: number
  task?: string

  constructor(id?: number, task?: string){
    this.id = id
    this.task = task
  }
}

export enum TaskActions {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  COMPLETE_TASK,
  UNDO_TASK,
}

export interface ITaskActionsRequest {
  type: TaskActions
  id?: number
  text?: string
}