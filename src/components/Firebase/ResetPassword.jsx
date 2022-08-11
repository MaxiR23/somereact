import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Avatar, Box, CssBaseline, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SendIcon from '@mui/icons-material/Send';

export default function ResetPassword() {

  const [error, setError] = React.useState();
  const { resetPassword } = useContext(AuthContext)
  const [user, setUser] = useState({
    email: '',
  })

  const navigate = useNavigate()

  const handleChanges = ({ target: { name, value } }) => setUser({ ...user, [name]: value })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email) return setError('Ingrese un correo electrónico');
    try {
      await resetPassword(user.email);
      setError('Revisa tu correo electrónico')
      setTimeout(() => {
        setError('')
        navigate('/login')
      }, 2000);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Usuario no encontrado')
      } else if (error.code === 'auth/invalid-email') {
        setError('Correo electrónico invalido. Intente nuevamente')
      } else {
        console.warn(error.message)
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
            Restablecer contraseña
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {error ?
                  <>
                    <TextField
                      required
                      error
                      fullWidth
                      id="email"
                      label="Correo Electrónico"
                      name="email"
                      autoComplete="email"
                      onChange={handleChanges}
                    />
                    <Typography textAlign={'end'} style={{ color: 'red' }}> {error} </Typography>
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
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar Mail
            </Button>
            <Grid container columnSpacing={2} justifyContent="flex-end">
              <Grid item>
                <Link to={'/login'} style={{ color: '#757de8' }} variant="body2">
                  Volver al login
                </Link>
              </Grid>
              <Grid item>
                <Link to={'/register'} style={{ color: '#757de8' }} variant="body2">
                  Registrarse
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}
