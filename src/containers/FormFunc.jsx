import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export default function FormFunc() {
  let dispatch = useDispatch();
  let reduxUser = useSelector(state => state.user);
  let [ input, setInput ] = useState(reduxUser);
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

  function save(event) {
    event.preventDefault();
    dispatch(setUser(input.username, input.password));
  }

  useEffect(() => {
    setInput(reduxUser);
    setError(validate(reduxUser));
  }, [reduxUser]);

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
        <div>
          <button onClick={e => save(e)}>Redux</button>
        </div>
      </form>
    </div>
  )
}
