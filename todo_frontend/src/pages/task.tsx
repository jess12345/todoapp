import React from 'react'
import { Task } from '../models/task'
import AppTaskList from '../components/taskList'

const todoTasks = [
  new Task(1, "Task 1"),
  new Task(2, "Task 2"),
  new Task(3, "Task 3"),
  new Task(4, "Task 4"),
  new Task(5, "Task 5"),
  new Task(6, "Task 6"),
  new Task(7, "Task 7"),
]

const doneTasks = [
  new Task(1, "Task 1"),
  new Task(2, "Task 2"),
  new Task(3, "Task 3"),
  new Task(4, "Task 4"),
  new Task(5, "Task 5"),
  new Task(6, "Task 6"),
  new Task(7, "Task 7"),
]

const TaskPage = () => {
  return (
    <div>
      To Do:
      <AppTaskList taskList={todoTasks} />
      <br/>
      Done:
      <AppTaskList taskList={doneTasks} />
    </div>
  )
}

export default TaskPage