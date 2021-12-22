import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions';
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
      input: this.props.reduxUser,
      error: {
        username: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Revisar (estamos comparando objetos)
    if(prevProps.reduxUser !== this.props.reduxUser) {
      // console.log("Hubo un update");
      this.setState({
        input: this.props.reduxUser
      });
      let errors = validate(this.props.reduxUser);
      this.setState({
        error: errors
      });
    }
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

  save(event) {
    event.preventDefault();
    this.props.setUser(this.state.input.username, this.state.input.password);
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
          <div>
            <button onClick={e => this.save(e)}>Redux</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reduxUser: state.user
  }
}

export default connect(mapStateToProps, { setUser })(FormClass);