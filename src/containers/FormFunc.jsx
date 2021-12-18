import React from 'react';
import { useState } from 'react';
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

export default function FormFunc() {
  let [ input, setInput ] = useState({username: '', password: ''});
  let [ error, setError ] = useState({username: '', password: ''});

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
    setError(validate({
      ...input,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <div>
      <form className="formContainer">
        <div className="formInputs">
          <input className={error.username && 'danger'} type="text" name="username" placeholder="Correo electrónico" value={input.username} onChange={(e) => handleChange(e)} />          
          <input className={error.password && 'danger'} type="password" name="password" placeholder="Contraseña" value={input.password} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          { error.username ? <p className="danger">{error.username}</p> : null }
          { error.password ? <p className="danger">{error.password}</p> : null }
        </div>
      </form>
    </div>
  )
}
