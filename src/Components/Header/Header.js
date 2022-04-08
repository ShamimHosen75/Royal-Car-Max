import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className='fw-bold fs-3' href="#home"><div className='text-danger'>Royal CarMax</div></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link>
            <Link className='nav' to='/home'>Home</Link>
        </Nav.Link>
        <Nav.Link>
            <Link className='nav' to='/reviews'>Reviews</Link>
        </Nav.Link>
        <Nav.Link>
            <Link className='nav' to='/dashboard'>Dashboard</Link>
        </Nav.Link>
        <Nav.Link>
            <Link className='nav' to='/about'>About</Link>
        </Nav.Link>
        <Nav.Link>
            <Link className='nav' to='/blog'>Blog</Link>
        </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;