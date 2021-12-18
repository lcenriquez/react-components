import { useState } from 'react';
import SearchBarFunc from '../components/SearchBarFunc';
import CardsFunc from '../components/CardsFunc';

function WeatherFunc() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad = "Cairns") {
    let apiKey = "4ae2636d8dfbdc3044bede63951a019b";

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if(data.main) {
        // console.log(data);
        setCities(cities => {
          if(cities?.some(city => city.id === data.id)) {
            // console.log("Ciudad duplicada");
            return cities;
          }
          return [...cities, data];
        });
      } else {
        alert("La ciudad buscada no existe");
      }
    });
  }

  function onClose(id) {
    setCities(cities => cities.filter(c => c.id !== id));
  }

  return (
    <div>
      <SearchBarFunc onSearch={onSearch} />
      <CardsFunc cities={cities} onClose={onClose} />
    </div>
  );
}

export default WeatherFunc;