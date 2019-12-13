import React from 'react'
import { Task, TaskProgressEnum } from '../../models/task'
import { Table, Button, ButtonGroup } from 'react-bootstrap'

const idColCss = {
  width: '30px'
}

const statusColCss = {
  width: '50px'
}

const buttonHeaderCss = {
  width: '150px',
  'text-align': 'center'
}

const AppTaskList = ({ taskList, actions } : {taskList : Task[], actions: any}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={idColCss}>#</th>
          <th>Task</th>
          <th style={statusColCss}>Status</th>
          <th style={buttonHeaderCss}>...</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map(t => (<TaskRow key={t.id} task={t} actions={actions}/>))}
      </tbody>
    </Table>
  )
}

const TaskRow = ({ task, actions } : {task : Task, actions: any}) => {
  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.task}</td>
      <td>{TaskProgressEnum[task.progress]}</td>
      <td><ActionButtons id={task.id} progress={task.progress} actions = {actions} /></td>
    </tr>
  )
}

const ActionButtons = ({ id, progress, actions }: {
  id: number , progress: TaskProgressEnum, actions: any
}) => {
  switch(progress) {
    case TaskProgressEnum.TODO:
      return (
        <ButtonGroup>
          <Button onClick={() => actions.clickCompleteTask(id)} variant="outline-success">Done</Button>
          <Button onClick={() => actions.clickDeleteTask(id)} variant="outline-danger">Delete</Button>
        </ButtonGroup>
      )
    case TaskProgressEnum.DONE:
      return (
        <ButtonGroup>
          <Button onClick={() => actions.clickUndoTask(id)} variant="outline-secondary">Undo</Button>
          <Button onClick={() => actions.clickDeleteTask(id)} variant="outline-danger">Delete</Button>
        </ButtonGroup>
      )
  }
  // dispatch event: something went wrong
}

export default AppTaskList