import React from 'react';
import style from './Timer.module.css';

class TimerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Timer',
      start: false,
      seconds: 0
    }
    this.intervalo = null;
    this.startFlag = false;
  }

  componentDidUpdate() {
    if(this.state.start && this.state.selected === 'Cron') {
      if(!this.startFlag) {
        this.intervalo = setInterval(() => {
          this.setState({
            seconds: this.state.seconds + 1
          });
        }, 1000);
        this.startFlag = true;
      }
        
    }
    
    if(this.state.start && this.state.selected === 'Timer') {
      if(!this.startFlag) {
        this.intervalo = setInterval(() => {
          this.setState({
            seconds: this.state.seconds - 1
          });
        }, 1000);
        this.startFlag = true;
      }
    }

    if(!this.state.start && this.state.seconds !== 0) {
      // Pone en pausa el contador
      this.stop();
    }

    if(this.state.seconds === 0 && this.state.selected === 'Timer' && this.startFlag === true) {
      // Detiene el contador si es cuenta regresiva y llega a cero
      this.reset();
    }
  }

  setTab = (event) => {
    this.setState({
      selected: event.target.id
    });
    this.stop();
  }

  toggleStart = () => {
    let seconds = this.state.seconds;
    if(this.state.selected === "Timer") {
      if(seconds === 0) seconds = +document.querySelector("#secondsInput").value;
    }
    this.setState({
      start: !this.state.start,
      seconds
    });
  }

  reset = () => {
    this.setState({
      seconds: 0,
      start: false
    });
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalo);
    this.startFlag = false;
  }

  render() {
    return (
      <div>
        <ul className={style.tabBar}>
          <li id="Timer" className={this.state.selected === "Timer" ? style.selected : null} onClick={(e) => this.setTab(e)}>Timer</li>
          <li id="Cron" className={this.state.selected === "Cron" ? style.selected : null} onClick={(e) => this.setTab(e)}>Cronómetro</li>
        </ul>
        <h1>{this.state.seconds} segundos</h1>
        <div className={style.controlsContainer}>
          <div className={style.controls}>
            <button className={`${style.btn} ${style.start}`} onClick={this.toggleStart}>{this.state.start ? "Detener" : "Iniciar"}</button>
            <button className={style.btn} onClick={this.reset}>Reset</button>
          </div>
          {this.state.selected === "Timer" ? <input type="text" className={style.secondsInput} name="seconds" id="secondsInput" placeholder="segundos" onChange={(e) => {this.setState({seconds: e.target.value})}} /> : null}
        </div>
      </div>
    )
  }
}

export default TimerClass;