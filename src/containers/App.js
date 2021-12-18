import { Routes, Route } from 'react-router-dom';
import Nav from '../components/NavClass';
import WeatherClass from './WeatherClass';
import WeatherFunc from './WeatherFunc';
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
              <div>
                <WeatherClass />
              </div>
            </div>
            <div className="func">
              <h1>Componentes funcionales</h1>
              <div>
                <WeatherFunc />
              </div>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
