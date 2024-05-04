import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Componentes/Item/item';
import Menu from './Componentes/Menu/menu';
import Formulario from './Componentes/Formulario/formulario';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

function App() {
  const goals = useSelector((state) => state.goals.value);

  return (
    <div className="App">
      <Menu></Menu>
      <h1>TO DO LIST</h1>
      <Container>
        <Row>
          <Col><Formulario></Formulario></Col>
          <Col>
          {goals.map((tarea) => (
            <Item name={tarea.name} description={tarea.description} dueDate={tarea.dueDate} isCompleted={tarea.isCompleted}></Item>
          ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
