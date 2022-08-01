import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
import { Container } from '@mui/system';
import { Avatar, Box, CssBaseline, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Register() {

  const [emailTypingError, setEmailTypingError] = React.useState();
  const [passwordTypingError, setPasswordTypingError] = React.useState();

  const [error, setError] = React.useState();
  const {signUp} = React.useContext(AuthContext);
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
    if (!user.email && !user.password) {
      setEmailTypingError('Inserte un correo electrónico valido.')
      setPasswordTypingError('Ingrese una contraseña valida.')
    } else if (!user.email) {
      setEmailTypingError('Ingrese un correo electrónico valido.')
    } else if (!user.password) {
      setPasswordTypingError('Ingrese una contraseña valida.')
    } else {
      setEmailTypingError('')
      setPasswordTypingError('')
    }
    
    setError('')
    try {
      await signUp(user.email, user.password);
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/weak-password') {
        setPasswordTypingError('Por favor introduzca una contraseña de mas de 6 caracteres.')
        setError('Contraseña debil')
      } else if (error.code === 'auth/invalid-email') {
        setEmailTypingError('E-mail invalido. Por favor introduzca un mail válido.')
        setError('E-mail invalido')
      } else if (error.code === 'auth/email-already-in-use'){
        setEmailTypingError('Este correo electrónico ya esta registrado.')
        setError('E-mail ya registrado');
     } else {
      console.warn(error.message);
     }
    }
  }

  return (
    <>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                {emailTypingError ? 
                <>
                <TextField
                required
                error
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                onChange={handleChanges}
              />
              <Typography textAlign={'end'} style={{color:'red'}}> {emailTypingError} </Typography>
                </>
                :
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  onChange={handleChanges}
                />
                }
              </Grid>
              <Grid item xs={12}>
                {passwordTypingError ?
                <>
                <TextField
                required
                error
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChanges}
              /> 
              <Typography textAlign={'end'} style={{color:'red'}}> {passwordTypingError} </Typography>
                </>
                :
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChanges}
                />
                }
              </Grid>
            </Grid>
            {error && <Typography textAlign={'end'} style={{color:'red'}}> {error} </Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/login'} style={{color:'#757de8'}} variant="body2">
                  Ya tenes una cuenta?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </>    
  )
}
