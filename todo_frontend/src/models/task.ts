export class Task {
  id: number
  task: string
  progress: TaskProgress

  constructor(id: number, task: string, progress = TaskProgress.TODO){
    this.id = id
    this.task = task
    this.progress = progress
  }
}

export enum TaskProgress {
  TODO,
  DONE
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