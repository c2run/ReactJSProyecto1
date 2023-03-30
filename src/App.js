import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hola José</code> App de React.
        </p>
        <Saludar name="José Manuel" anios="33" />
        <Saludar name="Karen" anios="31" />
      </header>
    </div>
  );
}

export default App;
