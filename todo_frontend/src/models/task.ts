export class Task {
  id: number
  task: string
  progress: TaskProgressEnum

  constructor(id: number, task: string, progress = TaskProgressEnum.TODO){
    this.id = id
    this.task = task
    this.progress = progress
  }
}

export enum TaskProgressEnum {
  TODO,
  DONE
}

export enum TaskActionsEnum {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  COMPLETE_TASK,
  UNDO_TASK,
}

export interface ITaskActionsRequest {
  type: TaskActionsEnum
  id?: number
  text?: string
}

export interface ITaskActions {
  clickCompleteTask: any,
  clickAddTask: any,
  clickDeleteTask: any,
  clickUndoTask: any,
  clickUpdateTask: any
}