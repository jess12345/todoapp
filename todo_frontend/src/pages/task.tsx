import React from 'react'
import { Task, TaskProgress } from '../models/task'
import AppTaskList from '../components/taskList'
import AppAddTask from '../components/addTask'

const todoTasks = [
  new Task(1, "Task 1"),
  new Task(2, "Task 2"),
  new Task(3, "Task 3", TaskProgress.DONE),
  new Task(4, "Task 4"),
  new Task(5, "Task 5", TaskProgress.DONE),
  new Task(6, "Task 6"),
  new Task(7, "Task 7", TaskProgress.DONE),
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
      <h1>My Todo List</h1>
      <AppAddTask />
      <AppTaskList taskList={todoTasks} />
    </div>
  )
}

// const mapStateToProps = (state: ) => {
//   return {

//   }
// }

export default TaskPage