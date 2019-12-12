import React from 'react'
import { Task } from '../models/task'

const AppTaskList = ({ taskList } : {taskList : Task[]}) => {
  return (
    <ul>
      {
        taskList.map( t => (
          <AppTask task={t} />
        ))
      }
    </ul>
  )
}

const clickTask = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  if(event.target instanceof Element){
    const task_clicked = (event.target as Element).id
    console.log(`clicked task with event: ${task_clicked}`)
  }
}

const AppTask = ({ task } : {task : Task}) => {
  return (
    <li>
      <input key={task.id} id={'button_'+task.id} onClick={clickTask} type="checkbox" value={task.task} /> {task.task}
    </li>
  )
}

export default AppTaskList