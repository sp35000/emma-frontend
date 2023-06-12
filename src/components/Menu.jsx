import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/NavLink';

function Menu() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Work4Love.net</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="IT" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">IT</NavDropdown.Item>
              <NavDropdown.Item href="/foo">Foo</NavDropdown.Item>
              <NavDropdown.Item href="/bar">Bar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Network</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mainframe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Database</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Unix/Linux</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Raspbian</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="News" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Nature</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">World</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Brasil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">America</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Asia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Africa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Oceania</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Technology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Culture</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Travel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Economy</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Sites" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Formula 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Movies and TV</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Music</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Learning</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Technology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Travel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Finance</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}
export default Menu
