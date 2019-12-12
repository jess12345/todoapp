import React from 'react'
import { connect } from 'react-redux'
import { Task, TaskProgress } from '../models/task'
import AppTaskList from './components/taskList'
import AppAddTask from './components/addTask'
import { IAppState } from '../models/state'
import { addTask, deleteTask, completeTask, undoTask, updateTask } from './redux/actions/task'

const todoTasks = [
  new Task(1, "Task 1"),
  new Task(2, "Task 2"),
  new Task(3, "Task 3", TaskProgress.DONE),
  new Task(4, "Task 4"),
  new Task(5, "Task 5", TaskProgress.DONE),
  new Task(6, "Task 6"),
  new Task(7, "Task 7", TaskProgress.DONE),
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

export default TaskPage


// const TaskPage = ({ state }: {state: any}) => {
//   console.log(">>>",state)
//   return (
//     <div>
//       <h1>My Todo List</h1>
//       <AppAddTask />
//       <AppTaskList taskList={state.todoTasks} />
//     </div>
//   )
// }

// const mapStateToProps = (state: any) => ({
//   todoTasks: state
// })

// const mapDispatchToProps = (dispatch: any) => ({
//   clickCompleteTask: (id: number) => dispatch(completeTask(id)),
//   clickAddTask: (text: string) => dispatch(addTask(text)),
//   clickDeleteTask: (id: number) => dispatch(deleteTask(id)),
//   clickUndoTask: (id: number, text: string) => dispatch(updateTask(id, text)),
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TaskPage)