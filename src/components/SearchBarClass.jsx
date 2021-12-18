import React from 'react';
import s from './SearchBar.module.css';

class SearchBarClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    }
  }

  onCityChange = (e) => {
    this.setState({
      city: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className={s.displayFlex}>
          <input type="text" onChange={this.onCityChange} />
          <button className={s.buttonSearch} onClick={() => this.props.onSearch(this.state.city)}>Buscar</button>
        </div>
      </div>
    )
  };
};

export default SearchBarClass