import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CardWidget = () => {

    const {cart} = useContext(CartContext);

    return (
        <>
        <AddShoppingCartIcon/>
        <Box sx={{mx: 0.5}}>
        {cart.length}
        </Box>
        </>
    )
};

export default CardWidget;