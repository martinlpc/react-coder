import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

// Assets 👇
import Logo from "../assets/images/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";

// ! NO CONFUNDIR "NavBar" (Component->Element) con "Navbar" (bootstrap component)

const NavBar = () => {
    let itemsCount = 2;
    return (
        <Navbar className="App-header" bg="dark" variant="dark" expand="md">
            <Container>
                <Link to="/">
                    <Navbar.Brand>
                        <img className="App-logo" src={Logo}></img>
                        <span className="Brand-name">NatuFriend</span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Mi amigx es..." id="basic-nav-dropdown">
                            <Link to="category/perro">
                                <NavDropdown.Item href="/">Perro</NavDropdown.Item>
                            </Link>
                            <Link to="category/gato">
                                <NavDropdown.Item href="/">Gato</NavDropdown.Item>
                            </Link>
                            <Link to="category/conejo">
                                <NavDropdown.Item href="/">Conejo</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link to="category/otra-especie">
                                <NavDropdown.Item href="/">Otra especie</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <Nav.Link as={Link} to="category/promos">
                            Promos
                        </Nav.Link>
                        <Nav.Link as={Link} to="category/accesorios">
                            Accesorios
                        </Nav.Link>
                        <Nav.Link as={Link} to="category/juguetes">
                            Juguetes
                        </Nav.Link>
                    </Nav>
                    <CartWidget itemsCount={itemsCount} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
