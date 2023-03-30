import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import {ReactComponent as ReactIcon} from "./assets/react.svg";
import { useState , useEffect} from 'react';

function App() {


  //Hook useState para asignar y cambiar valor a un estado
  const [estadoAuto, AsignarEstadoAuto] = useState(false);

  //Hook de efecto. se ejecuta luego de renderizar.
  const [contar, setContar] = useState(0);

  useEffect(() => {

  }, [contar]);

  /*
  const userName = "José Cerda";
  const edad = 34;
  //pasando variables a los props
*/


  //pasando objeto con todos los datos
  const user = {
    nombre: "Jose Manuel",
    edad: 34,
    color: "Rojo"
  };

  const saludarFN = (nombre, edad) => {
    //Template strings para añadir variables al texto sin tener que concatenar
    console.log(`Hola ${nombre}, tiene ${edad} años.`);
  }

    const encenderApagar = () =>{
      // -> ! manda lo contrario a lo que actualmente es. para poder cambiar el estado.
      AsignarEstadoAuto(!estadoAuto);
      //En caso de pasar la función a otro componente utilizar prevValue para cambiar el último valor.
      //AsignarEstadoAuto(prevValue => !prevValue);
      setContar(contar+1);
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Bootstrap</h1>
        <Saludar userInfo={user} saludarFN={saludarFN} />
        <Button variant="success" size="lg" block>Large button</Button>{''}
          <h3> El auto está: {estadoAuto ? "Encendido" : "Apagado"} </h3>
          <h4>Clicks {contar}</h4>
          <Button variant='success' onClick={encenderApagar}>Encender/Apagar</Button>
        <ReactIcon></ReactIcon>
        <>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
         Objeto Acordión
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
      </header>
    </div>
  );
}

export default App;
