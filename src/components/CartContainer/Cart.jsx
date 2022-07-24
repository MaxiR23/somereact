import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';

const Cart = () => {

    const { cart, clear, removeItem, quantity, total } = useContext(CartContext);
    console.log(total)
    console.log(quantity)

    return (
        <>
            {cart.length < 1 ?
                <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Typography textAlign={'center'}> No tienes productos agregados </Typography>
                </Container>
                :
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Producto</TableCell>
                                <TableCell align="right">Modelo</TableCell>
                                <TableCell align="right">Precio</TableCell>
                                <TableCell align="right">Cantidad</TableCell>
                                <TableCell align="right">Precio Total</TableCell>
                                <TableCell align="right">Finalizar</TableCell>
                                <TableCell align="right">Eliminar Prod</TableCell>
                                <TableCell align="right">Eliminar Todo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row"> {row.brand} </TableCell>
                                    <TableCell align="right"> {row.model} </TableCell>
                                    <TableCell align="right">$ {row.price} </TableCell>
                                    <TableCell align="right"> {row.quantity} </TableCell>
                                    <TableCell align="right">$ {row.quantity * row.price}  </TableCell>
                                    <TableCell align="right">
                                        <Button>
                                            <Link to={'/checkout'}>
                                                Comprar
                                            </Link>
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => removeItem(row.id)}>
                                            <ClearIcon> </ClearIcon>
                                            Borrar
                                        </Button>
                                    </TableCell>
                                    <TableCell align='right'>
                                        <Button onClick={() => clear()}>
                                            Borrar Todo
                                        </Button>
                                    </TableCell>
                                    <TableCell rowSpan={3} />
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">{total}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </>
    )
}


export default Cart;