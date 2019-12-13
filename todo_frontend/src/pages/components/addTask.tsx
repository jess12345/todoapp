import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

const componentCss = {
  margin: '10px 0px'
}

const AppAddTask = (state: any) => {
  return (
    <div style={componentCss}>
      <Form inline >
        <FormControl type="text" placeholder="Task description" className="mr-sm-2" />
        <Button onClick={() => clickAdd("xxx")} variant="outline-success">Add</Button>
      </Form>
    </div>
  )
}

const clickAdd = (text: string) => {
  console.log(`clicked add task`)
}

export default AppAddTask