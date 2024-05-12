import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { completeTask, initAddTodo} from '../../Reducers/tasksSlice';
import { completeGoal, initAddGoal } from '../../Reducers/goalsSlice';
import './item.scss';

function Item(props) {
  const dispatch = useDispatch();
  const currentView = useSelector(state => state.option.currentView);

  const handleComplete = () => {
    console.log('Current View: ', currentView);
    if (currentView === 'goals') {
      dispatch(completeGoal({ id: props.id }));
    } else {
      dispatch(completeTask({ id: props.id }));
    }
  };
  
  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className='fw-bold'>Description</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className='fw-bold'>Due Date</Card.Text>
        <Card.Text>{props.dueDate}</Card.Text>
        <Button variant="primary" className='buttonStyle' onClick={handleComplete} >
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
