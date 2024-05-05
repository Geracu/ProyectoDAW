import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeView } from '../../Reducers/optionSlice';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Menu() {
    const dispatch = useDispatch();
    const currentView = useSelector((state) => state.option.current);

    const screenChanges = (option) => {
        dispatch(changeView(option));
    }

    return (
        <Navbar expand="lg" className='navbar navbar-dark bg-dark'>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link
                            href='#Tasks'
                            onClick={() => screenChanges('tasks')}
                            className={currentView === 'tasks' ? 'active' : ''}
                        >
                            Tasks
                        </Nav.Link>
                        <Nav.Link
                            href='#Goals'
                            onClick={() => screenChanges('goals')}
                            className={currentView === 'goals' ? 'active' : ''}
                        >
                            Goals
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
