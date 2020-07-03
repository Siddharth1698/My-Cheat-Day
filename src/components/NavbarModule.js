import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavbarModule.css';

class NavbarModule extends React.Component{
    render() {
        return(
            <div className="navbar-module">
<Navbar collapseOnSelect expand="lg">
  <Navbar.Brand href="#home">MyCheatDay</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">CheatDay</Nav.Link>
      <Nav.Link href="#pricing">Animals</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#logout">
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

            </div>
        );
    }   
}

export default NavbarModule;