import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Stephen McAleese</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">About</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation