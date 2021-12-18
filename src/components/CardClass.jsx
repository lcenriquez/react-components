import React from 'react';
import s from './Card.module.css';

class CardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sth: "Algo"
    };
  }

  render() {
    return (
      <div className={s.container}>
        <button className={s.close} onClick={() => this.props.onClose(this.props.cityId)}></button>
        <div className={s.containerFlex}>
          <h3 className={s.test}>{this.props.name}</h3>
          <img alt="not found" src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} />
          <div className={s.displayFlex}>
            <div className={s.containerFlex}>
              <h4>Max</h4>
              <p>{this.props.max}</p>
            </div>
            <div className={s.containerFlex}>
              <h4>Min</h4>
              <p>{this.props.min}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default CardClass;