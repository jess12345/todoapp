import { Task } from '../models/task'
import { request, RestfulMethod } from '../helpers/RestfulService'

export const getTask = async () => {
  let x: Task | undefined = undefined
  await request<Task>(RestfulMethod.GET, 'http://localhost:9999/task', {}).toPromise().then(
    task => {
      x = task
    }
  )
  return x
}
