import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import './formulario.scss';
import { useDispatch } from 'react-redux';
import {
  addGoal
} from '../../Reducers/goalsSlice';
import { useRef } from 'react';

function Formulario(props) {

  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addGoal({ 'name': inputRefName.current.value, 'description': inputRefDescription.current.value, 'dueDate': inputRefDueDate.current.value }));
  };

  return (
    <div className="formulario-custom">
      <Container>
        <Form>
          <Form.Group className="formulario">

            <Form.Label>Name of activity</Form.Label>
            <Form.Control type="text" placeholder='' ref={inputRefName} />
            <Form.Text className="text-muted"></Form.Text>

            <Form.Label>Description of activity</Form.Label>
            <Form.Control type="textarea" rows={3} ref={inputRefDescription} />

            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" placeholder='' ref={inputRefDueDate} />

            <Button variant="info" onClick={addItem} className="button">
              Agregar Tarea
            </Button>
          </Form.Group>


        </Form>
      </Container>
    </div>
  );
}

export default Formulario;
