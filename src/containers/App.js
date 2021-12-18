import { Routes, Route } from 'react-router-dom';
import Nav from '../components/NavClass';
import WeatherClass from './WeatherClass';
import WeatherFunc from './WeatherFunc';
import FormFunc from './FormFunc';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <div className="class">
              <h1>Componentes de clase</h1>
              <div className="app">
                <WeatherClass />
              </div>
              <hr />
            </div>
            <div className="func">
              <h1>Componentes funcionales</h1>
              <div className="app">
                <WeatherFunc />
              </div>
              <hr />
              <div className="app">
                <FormFunc />
              </div>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
