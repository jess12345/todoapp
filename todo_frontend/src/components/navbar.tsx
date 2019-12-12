import React from 'react'
import logo from '../resources/logo.svg'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} className="App-logo" height="30px" alt="logo"/>
        ToDo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/tasks">
            <NavItem>Signup</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  )
}

export default AppNavbar