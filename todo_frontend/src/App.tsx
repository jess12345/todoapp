import React from 'react'
import './App.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import AppNavbar from './components/navbar'
import AppRouter from './routes/router'

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader />
      <br/>
      <AppBody />
    </div>
  );
}

const AppHeader: React.FC = () => {
  return (
    <header className="App-header">
      <Container>
        <AppNavbar />
      </Container>
    </header>
  )
}

const AppBody: React.FC = () => {
  return (
    <body>
      <Container>
        <AppRouter />
      </Container>
    </body>
  )
}

export default App
