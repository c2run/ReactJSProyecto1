import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';


function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFN={saludarFN} />
        
      </header>
    </div>
  );
}

export default App;
