import React from 'react';
import './Form.css';

export function validate(input) {
  let errors = {};
  if(!input.username) {
    errors.username = 'Usuario requerido';
  } else if(!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Usuario incorrecto';
  }

  if(!input.password) {
    errors.password = "Contraseña requerida";
  } else if(!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Contraseña no válida";
  }

  return errors;
}

class FormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        username: '',
        password: ''
      },
      error: {
        username: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: event.target.value
      }
    });

    let errors = validate(this.state.input);

    this.setState({
      error: errors
    });
  }

  render() {
    return (
      <div>
        <form className="formContainer">
          <div className="formInputs">
            <input className={this.state.error.username && 'danger'} type="text" name="username" placeholder="Correo electrónico" value={this.state.input.username} onChange={(e) => this.handleChange(e)} />          
            <input className={this.state.error.password && 'danger'} type="password" name="password" placeholder="Contraseña" value={this.state.input.password} onChange={(e) => this.handleChange(e)} />
          </div>
          <div>
            { this.state.error.username ? <p className="danger">{this.state.error.username}</p> : null }
            { this.state.error.password ? <p className="danger">{this.state.error.password}</p> : null }
          </div>
        </form>
      </div>
    )
  }
}

export default FormClass;