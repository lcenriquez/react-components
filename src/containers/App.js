import { Routes, Route } from 'react-router-dom';
import Nav from '../components/NavClass';
import WeatherClass from './WeatherClass';
import WeatherFunc from './WeatherFunc';
import FormClass from './FormClass';
import FormFunc from './FormFunc';
import TimerClass from './TimerClass';
import TimerFunc from './TimerFunc';
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
              <div className="app">
                <FormClass />
              </div>
              <hr />
              <div className="app">
                <TimerClass />
              </div>
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
              <hr />
              <div className="app">
                <TimerFunc />
              </div>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
