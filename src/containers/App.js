import Nav from '../components/NavClass';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="container">
        <div className="container class">
          <h1>Componentes de clase</h1>
        </div>
        <div className="container func">
          <h1>Componentes funcionales</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
