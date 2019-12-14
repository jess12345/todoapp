import React from 'react'
import { FormControl, Button, InputGroup } from 'react-bootstrap'

const componentCss = {
  margin: '20px 0px'
}

const buttonCss = {
  margin: '0px 0px 0px 15px'
}

const AppAddTask = ({actions}: {actions: any}) => {
  return (
    <div style={componentCss}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">New Task</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Description"
        />
        <Button onClick={() => clickAdd(actions)} variant="outline-success" style={buttonCss}>Add</Button>
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