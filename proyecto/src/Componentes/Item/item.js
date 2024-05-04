import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { completeGoal } from '../../Reducers/goalsSlice';
import './item.scss';

function Item(props) {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeGoal({name: props.name}));
  };

  const cardTextStyle = props.isCompleted ? "text-decoration-line-through" : "";

  return (
    <Card className="card">
      <Card.Body>
        <Card.Title style={{ textDecoration: props.isCompleted ? 'line-through' : 'none' }}>{props.name}</Card.Title>
        <Card.Text className='fw-bold'>Description</Card.Text>
        <Card.Text style={{ textDecoration: props.isCompleted ? 'line-through' : 'none' }}>{props.description}</Card.Text>
        <Card.Text className='fw-bold'>Due Date</Card.Text>
        <Card.Text style={{ textDecoration: props.isCompleted ? 'line-through' : 'none' }}>{props.dueDate}</Card.Text>
        <Button variant={props.isCompleted ? "secondary" : "primary"} className='buttonStyle' onClick={handleComplete} disabled={props.isCompleted}>
          {props.isCompleted ? "Completed" : "Complete"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
