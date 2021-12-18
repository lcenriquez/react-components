import React from 'react';
import Card from "./CardClass";
import cards from './Cards.module.css';

class CardsClass extends React.Component {
  render() {
    if(this.props.cities && this.props.cities.length>0) {
      return (
        <div>
          <div className={cards.displayFlex}>
            {
              this.props.cities?.map((city) => 
              // El return está implicito porque no usamos llaves en la función... de lo contrario tendríamos que escribirlo...
               <Card 
                  key={city.id}
                  cityId={city.id}
                  max={city.main.temp_max} 
                  min={city.main.temp_min} 
                  name={city.name} 
                  img={city.weather[0].icon} 
                  onClose={this.props.onClose} 
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
  } 
}

export default CardsClass;