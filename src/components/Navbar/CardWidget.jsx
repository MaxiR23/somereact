import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {

    const { quantity } = useContext(CartContext);

    return (
        <>
        <IconButton sx={{marginTop: 1}} style={{ color: 'white' }} aria-label={`show ${quantity} notifications`}>
            <Badge badgeContent={quantity} color={'error'}>
                <Link to={'/cart'} style={{color:'white'}}>
                <AddShoppingCartIcon/>
                </Link>
            </Badge>
        </IconButton>
        </>
    )
};

export default CardWidget;