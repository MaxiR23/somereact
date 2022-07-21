import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const [error, setError] = React.useState();
  const {login, resetPassword} = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  /* Actualiza el estado */                         /* copio todos los datos que tenga y voy a actualizar */
  const handleChanges = ({target: {name, value}}) => setUser({...user, [name] : value})
  /* Para ver que es lo que tiene */
  const handleSubmit = async (e) => {
    e.preventDefault();
    /* limpio el estado error */
    setError('')
    try {
      await login(user.email, user.password);
      navigate('/')
    } catch (error) {
     console.warn(error.message);
     /* validar codigos error.code */ 
     setError(error.message);
    }
  }

  const handleResetPassword = async () => {
    if (!user.email) return setError('Ingrese un mail');
    try {
      await resetPassword(user.email);
      setError('Revisa tu e-mail')
      setTimeout(() => {
        setError('')
      }, 2000);
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      {error && <p> {error} </p>}
      <form onSubmit={handleSubmit}>
      <label htmlFor="email"> E-mail </label>
      <input type="email" placeholder='Inserte e-mail' id='email' name='email'
      onChange={handleChanges}
      />
      <label htmlFor="password"> Password </label>
      <input type="password" placeholder='Inserte constraseña' id='password' name='password'
      onChange={handleChanges}
      />
      <button> Ingresar </button>
      <button onClick={handleResetPassword}>Olvidaste la contraseña?</button>
    </form>
    </div>    
  )
}

