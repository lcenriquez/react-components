import React, { useState } from 'react';
import s from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  let [city, setCity] = useState("");

  function onCityChange(e) {
    setCity(city => e.target.value);
  }

  return (
    <div>
      <div className={s.displayFlex}>
        <input type="text" onChange={onCityChange} />
        <button className={s.buttonSearch} onClick={() => onSearch(city)}>Buscar</button>
      </div>
    </div>
  )
};