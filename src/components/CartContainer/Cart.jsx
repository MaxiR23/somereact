import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    
    const {cart, clear, removeItem, total} = React.useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Container fixed sx={{ mt: 2 }}>
            {cart.length < 1 ?
            <Container sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh'}}>
                <Typography> No hay productos agregados </Typography>
                <Typography> <Link to={'/'} style={{textDecoration:'none', color:'#0077b6'}}> Volver al inicio </Link> </Typography>
            </Container>
            :
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Detalle
                            </TableCell>
                            <TableCell align="right">Precio</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Descripcion</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell align="right">Unidad</TableCell>
                            <TableCell align="right">Suma total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell> <b> {row.brand} </b> {row.model}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{'$'+row.price}</TableCell>
                                <TableCell align="right">{'$'+row.price * row.quantity}</TableCell>
                                <ClearIcon sx={{mt:2}} onClick={() => removeItem(row.id)}></ClearIcon>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell align="right">{'$'+total}</TableCell>
                        </TableRow>
                        <TableRow>   
                            <TableCell colSpan={1}> </TableCell>   
                            <TableCell align='right'> <Button onClick={() => clear()}> Borrar todo </Button> </TableCell>   
                            <TableCell align='right'> <Button onClick={() => navigate('/checkout')}> Comprar </Button> </TableCell>   
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </Container>
    );
}

export default Cart;