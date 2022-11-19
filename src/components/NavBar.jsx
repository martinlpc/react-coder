import React from "react";
import CartWidget from "./CartWidget";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.svg";

const NavBar = () => {
    let itemsCount = 2;
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <img alt="react logo" src={logo} width="30" height="30" className="d-inline-block align-top" />
                <Navbar.Brand href="#home">NatuFriend</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Mi amigx es..." id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Perro</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gato</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ave</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Otra especie</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Promos</Nav.Link>
                        <Nav.Link href="#link">Alimento</Nav.Link>
                        <Nav.Link href="#link">Juguetes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget itemsCount={itemsCount} />
            </Container>
        </Navbar>
    );
};

export default NavBar;
