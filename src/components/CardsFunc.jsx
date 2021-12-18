import React from 'react';
import Card from "./CardFunc";
import cards from './Cards.module.css';

export default function CardsFunc({ cities, onClose }) {
  // console.log(cities);
  if(cities && cities.length>0) {
    return (
      <div>
        <div className={cards.displayFlex}>
          {
            // cities && cities.map((city) => <Card key={city.id} max={city.main.temp_max} min={city.main.temp_min} name={city.name} img={city.weather[0].icon} onClose={() => alert(city.name)} />)
            cities?.map((city) => // El return está implicito porque no usamos llaves en la función... de lo contrario tendríamos que escribirlo...
              <Card 
                key={city.id}
                cityId={city.id}
                max={city.main.temp_max} 
                min={city.main.temp_min} 
                name={city.name} 
                img={city.weather[0].icon} 
                onClose={onClose} 
              />
            )
          }          
        </div>
      </div>
    )
  } else {
    return (
      <div>Busca una ciudad para agregar su tarjeta</div>
    )
  }
};