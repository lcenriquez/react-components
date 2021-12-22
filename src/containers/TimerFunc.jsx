import React, { useState, useEffect } from 'react';
import style from './Timer.module.css';

export default function TimerFunc() {
  let [ clock, setClock ] = useState({selected: 'Timer', start: false, seconds: 0});
  let intervalo = null;
  let startFlag = false;

  useEffect(() => {
    if(clock.start && clock.selected === 'Cron') {
      if(!startFlag) {
        intervalo = setInterval(() => {
          setClock({
            ...clock,
            seconds: clock.seconds + 1
          });
        }, 1000);
        startFlag = true;
      } 
    }

    if(clock.start && clock.selected === 'Timer') {
      if(!startFlag) {
        intervalo = setInterval(() => {
          setClock({
            ...clock,
            seconds: clock.seconds - 1
          });
        }, 1000);
        startFlag = true;
      }
    }

    if(!clock.start && clock.seconds !== 0) {
      // Pone en pausa el contador
      stop();
    }

    if (clock.seconds === 0 && clock.selected === 'Timer' && startFlag === true) {
      // Detiene el contador si es cuenta regresiva y llega a cero
      reset();
    }

    // Cuando el componente se va a desmontar...
    return () => clearInterval(intervalo);
  }, [clock.start, clock.seconds, clock.selected]);

  function setTab(event) {
    setClock({
      ...clock,
      selected: event.target.id
    });
    stop();
  }

  function toggleStart() {
    let seconds = clock.seconds;
    if(clock.selected === "Timer") {
      if(seconds === 0) seconds = +document.querySelector("#secondsInputF").value;
    }
    setClock({
      ...clock,
      start: !clock.start,
      seconds
    });
  }

  function reset() {
    setClock({
      ...clock,
      seconds: 0,
      start: false
    });
    stop();
  }

  function stop() {
    clearInterval(intervalo);
    startFlag = false;
  }

  return (
    <div>
      <ul className={style.tabBar}>
        <li id="Timer" className={clock.selected === "Timer" ? style.selected : null} onClick={(e) => setTab(e)}>Timer</li>
        <li id="Cron" className={clock.selected === "Cron" ? style.selected : null} onClick={(e) => setTab(e)}>Cronómetro</li>
      </ul>
      <h1>{clock.seconds} segundos</h1>
      <div className={style.controlsContainer}>
        <div className={style.controls}>
          <button className={`${style.btn} ${style.start}`} onClick={toggleStart}>{clock.start ? "Detener" : "Iniciar"}</button>
          <button className={style.btn} onClick={reset}>Reset</button>
        </div>
        {clock.selected === "Timer" ? <input type="text" className={style.secondsInput} name="seconds" id="secondsInputF" placeholder="segundos" onChange={(e) => {setClock({...clock, seconds: e.target.value})}} /> : null}
      </div>
    </div>
  )
}
