import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";

// Assets 👇
//import Logo from "../assets/images/logo.svg";
import Logo from "../assets/images/logo.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";
import { Dropdown, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// ! NO CONFUNDIR "NavBar" (Component->Element) con "Navbar" (bootstrap component)
// * Toda la sección comentada es el filtro por especie, decidir si se va a implementar o no

const NavBar = () => {
    let itemsCount = 0;
    return (
        <header>
            <Navbar className="App-navbar" bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img className="App-logo" src={Logo} alt="..."></img>
                        </Link>
                        {/*<span className="Brand-name">NatuFriend</span>*/}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center me-auto">
                            {/*<NavDropdown title="Mi amigx es..." id="basic-nav-dropdown">
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
                            </NavDropdown>*/}
                            <Nav.Item>
                                <Nav.Link as={Link} to="category/promos">
                                    Promos
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="category/accesorios">
                                    Accesorios
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="category/juguetes">
                                    Juguetes
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {/*
                        // ! VIEJO WIDGET    
                        <Link to="/cart">
                            <CartWidget itemsCount={itemsCount} />
                        </Link>
                        */}
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;
