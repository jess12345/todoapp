import React from 'react'
import { FormControl, Button, InputGroup } from 'react-bootstrap'

const componentCss = {
  margin: '20px 0px'
}

const AppAddTask = ({actions}: {actions: any}) => {
  return (
    <div style={componentCss}>
      <InputGroup>
        <FormControl id="newTask" as="textarea" aria-label="With textarea" placeholder="Task description" />
        <Button onClick={() => clickAdd(actions)} variant="outline-success">Add</Button>
      </InputGroup>
    </div>
  )
}

const clickAdd = (actions: any) => {
  const newTask = document.getElementById('newTask') as HTMLInputElement
  if(newTask){
    actions.clickAddTask(newTask.value)
    newTask.value = ''
  }
}

export default AppAddTask