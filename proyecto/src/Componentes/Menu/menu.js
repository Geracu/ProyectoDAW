import React from 'react';
import { useDispatch } from 'react-redux';
import { changeView } from '../../Reducers/optionSlice';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Menu() {
    const dispatch = useDispatch();

    return (
        <Navbar expand="lg" className='navbar navbar-dark bg-dark'>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link onClick={() => dispatch(changeView('tasks'))}>Tasks</Nav.Link>
                        <Nav.Link onClick={() => dispatch(changeView('goals'))}>Goals</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
