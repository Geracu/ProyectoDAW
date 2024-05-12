import React, { useEffect, useCallback } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componentes/Item/item';
import Menu from './Componentes/Menu/menu';
import Formulario from './Componentes/Formulario/formulario';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { initAddGoal } from './Reducers/goalsSlice';
import { initAddTodo } from './Reducers/tasksSlice';
import { changeView } from './Reducers/optionSlice';
import { current } from '@reduxjs/toolkit';

function App() {
  const currentView = useSelector((state) => state.option.currentView);
  const goals = useSelector((state) => state.goals.value);
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  function initFetch() {
    if (currentView === 'tasks') {
      fetch("http://localhost:3001/tasks/getTasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "123456"
        }
      }).then((response) => {
        console.log(response)
        return response.json();
      }).then((response) => {
        console.log("Fetched tasks:",response);
        response.map((task) => {
          dispatch((initAddTodo(task)));
        })
      }).catch((err) => {
        console.log(err);
      })
    } else {
      fetch("http://localhost:3001/goals/getGoals", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "123456"
        }
      }).then((response) => {
        console.log(response)
        return response.json();
      }).then((response) => {
        console.log("Fetched goals:",response);
        response.map((goal) => {
          dispatch((initAddGoal(goal)));
        })
      }).catch((err) => {
        console.log(err);
      })
    };
  }
  useEffect(() => {
    initFetch();
  }, [currentView]);

  return (
    <div className="App">
      <Menu />
      {currentView === 'goals' ? (
        <Container>
          <h1>Goals List</h1>
          <Row>
            <Col><Formulario currentView={currentView} /></Col>
            <Col>
              {goals.map((goal,index) => (
                <Item key={index} name={goal.name} description={goal.description} dueDate={goal.dueDate} id={goal.id}></Item>
              ))}
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <h1>Tasks List</h1>
          <Row>
            <Col><Formulario currentView={currentView} /></Col>
            <Col>
              {tasks.map((task,index) => (
                <Item key={index} name={task.name} description={task.description} dueDate={task.dueDate} id={task.id}></Item>
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
