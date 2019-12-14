import React from 'react'
import { connect } from 'react-redux'
import { Task, ITaskActions } from '../models/task'
import AppTaskList from './components/taskList'
import AppAddTask from './components/addTask'
import { IAppState } from '../models/state'
import TaskAction from './redux/actions/task'

const TaskPage = ({ 
  todoTasks,
  taskActions
}: {
  todoTasks: Task[],
  taskActions: ITaskActions
}) => {
  return (
    <div>
      <h1>My Todo List</h1>
      <AppAddTask actions={taskActions}/>
      <AppTaskList taskList={todoTasks} actions={taskActions} />
    </div>
  )
}

const mapStateToProps = (state: IAppState) => ({
  todoTasks: state.tasks
})

const mapDispatchToProps = (dispatch: any) => ({
  taskActions: {
    clickCompleteTask: (id: number) => dispatch(TaskAction.completeTask(id)),
    clickAddTask: (text: string) => dispatch(TaskAction.addTask(text)),
    clickDeleteTask: (id: number) => dispatch(TaskAction.deleteTask(id)),
    clickUndoTask: (id: number) => dispatch(TaskAction.undoTask(id)),
    clickUpdateTask: (id: number, text: string) => dispatch(TaskAction.updateTask(id, text))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskPage)