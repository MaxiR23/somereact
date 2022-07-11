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
import { Button } from '@mui/material';

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell align="right">Modelo</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Precio Total</TableCell>
                        <TableCell align="right">Eliminar Producto</TableCell>
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
                            <TableCell align="right">$ {row.price.toFixed(3)} </TableCell>
                            <TableCell align="right"> {row.quantity} </TableCell>
                            <TableCell align="right">$ {Math.trunc(row.price) * row.quantity} </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => removeItem()}>
                                    Borrar
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Cart;