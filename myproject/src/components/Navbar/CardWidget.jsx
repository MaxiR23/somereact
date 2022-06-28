import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';

const CardWidget = ({cardProducts}) => {
    return (
        <>
        <AddShoppingCartIcon/>
        <Box sx={{mx: 0.5}}>
        {cardProducts}
        </Box>
        </>
    )
};

export default CardWidget;