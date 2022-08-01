import React from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Button, Container, Paper } from '@mui/material';

export default function CheckOut() {
  
  const navigate = useNavigate();
  const {user} = React.useContext(AuthContext);
  const {cart, clear, total} = React.useContext(CartContext)

  const name = 'Maxi';
  const lastName = 'Rebolo';
  const userEmail = user.email;

  const address = ['Av Camino del Peru', 'Yerba Buena', 'Tucuman', 'Argentina'];
  
  const userDetail = [
    { name: 'Nombre', detail: name },
    { name: 'Apellido', detail: lastName },
    { name: 'E-mail', detail: userEmail },
  ];  

  //crear una pagina para que contenga toda la data de usuario y aqui solamente mostrarla!
  const sendOrder = async () => {
    const order = {
      buyer: {name, lastName, userEmail},
      item: cart,
      total: total
    }

    /* si no tengo nombre o tel o email, el return corta la funcion y no se ejecuta lo de abajo */
    if (!userEmail) return;
    
    const db = getFirestore();
    const docRef = collection(db, 'orders') 

    try {
      await addDoc(docRef, order).then((id) => console.log(id)) 
        alert('Muchas gracias por haber realizado una compra en nuestra website');
        navigate('/')
        clear();
    } catch (error) {
      console.warn(error.message)      
    }
  }

  return (
    <>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}> 
        <Typography textAlign={'center'} variant="h6" gutterBottom>
        Resumen del pedido
      </Typography>
        </Paper>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.brand} secondary={product.model} />
            <Typography variant="body2">{'$'+product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {'$'+total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Sucursal
          </Typography>
          <Typography gutterBottom>Lauf</Typography>
          <Typography gutterBottom>{address.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalle del usuario
          </Typography>
          <Grid container>
            {userDetail.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Button 
      sx={{m:2}}
      variant="contained" 
      size="medium" 
      fullWidth
      onClick={sendOrder}
      > 
      Finalizar compra
      </Button>
      </Container>
    </>
  )
}