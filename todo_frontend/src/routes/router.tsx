import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import TaskPage from '../pages/task'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/tasks' component={TaskPage} />
        <Redirect from='/' to='/tasks' />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter