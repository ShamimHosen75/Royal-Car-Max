import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div>
            <NavbarBrand bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><Link className="link" to='/home'>CarMax</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <CustomLink className="link" to='/'> Home</CustomLink>
                            <CustomLink className="link" to='/reviews'>Reviews</CustomLink>
                            <CustomLink className="link" to='/dashboard'>Dashboard</CustomLink>
                            <CustomLink className="link" to='/blog'>Blog</CustomLink>
                            <CustomLink className="link" to='/about'>About</CustomLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </NavbarBrand>
        </div>
    );
};

export default Header;