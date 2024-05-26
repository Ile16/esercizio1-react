import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNav(){
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Browse</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default MyNav;