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

const AppTaskList = ({ taskList } : {taskList : Task[]}) => {
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
        {taskList.map(t => (<TaskRow key={t.id} task={t}/>))}
      </tbody>
    </Table>
  )
}

const TaskRow = ({ task } : {task : Task}) => {
  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.task}</td>
      <td>{TaskProgressEnum[task.progress]}</td>
      <td><ActionButtons id={task.id} progress={task.progress} /></td>
    </tr>
  )
}

const clickDone = (task_id: number) => {
  console.log(`clicked done on task ${task_id}`)
}

const clickDelete = (task_id: number) => {
  console.log(`clicked delete on task ${task_id}`)
}

const clickUndo = (task_id: number) => {
  console.log(`clicked undo on task ${task_id}`)
}

const ActionButtons = ({ id, progress }: {id: number , progress: TaskProgressEnum}) => {
  switch(progress) {
    case TaskProgressEnum.TODO:
      return (
        <ButtonGroup>
          <Button onClick={() => clickDone(id)} variant="outline-success">Done</Button>
          <Button onClick={() => clickDelete(id)} variant="outline-danger">Delete</Button>
        </ButtonGroup>
      )
    case TaskProgressEnum.DONE:
      return (
        <ButtonGroup>
          <Button onClick={() => clickUndo(id)} variant="outline-secondary">Undo</Button>
          <Button onClick={() => clickDelete(id)} variant="outline-danger">Delete</Button>
        </ButtonGroup>
      )
  }
  // dispatch event: something went wrong
}

export default AppTaskList