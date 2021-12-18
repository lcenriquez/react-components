import React from 'react';
import SearchBarClass from '../components/SearchBarClass';
import CardsClass from '../components/CardsClass';

class WeatherClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
  }

  onSearch = (ciudad = "Cairns") => {
    let apiKey = "4ae2636d8dfbdc3044bede63951a019b";

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if(data.main) {
        // console.log(data);
        if(this.state.cities?.some(city => city.id === data.id)) {
          // console.log("Ciudad duplicada");
          this.setState({
            cities: this.state.cities 
          })
        } else {
          this.setState({
            cities: [...this.state.cities, data]
          });
        }
      } else {
        alert("La ciudad buscada no existe");
      }
    });
  }

  onClose = (id) => {
    this.setState({
      cities: this.state.cities.filter(c => c.id !== id)
    });
  }

  render() {
    return (
      <div>
        <SearchBarClass onSearch={this.onSearch} />
        <CardsClass cities={this.state.cities} onClose={this.onClose} />
      </div>
    );
  }
}

export default WeatherClass;