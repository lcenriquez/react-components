import React from 'react';
import s from './Card.module.css';

export default function CardFunc({ cityId, max, min, name, img, onClose }) {
  return (
    <div className={s.container}>
      <button className={s.close} onClick={() => onClose(cityId)}></button>
      <div className={s.containerFlex}>
        <h3 className={s.test}>{name}</h3>
        <img alt="not found" src={`http://openweathermap.org/img/wn/${img}@2x.png`} />
        <div className={s.displayFlex}>
          <div className={s.containerFlex}>
            <h4>Max</h4>
            <p>{max}</p>
          </div>
          <div className={s.containerFlex}>
            <h4>Min</h4>
            <p>{min}</p>
          </div>
        </div>
      </div>
    </div>
  )
};