import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import ItemCount from './ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { useState } from 'react';
import './ItemDetail.css'
import RelatedItems from '../RelatedItems/RelatedItems';

const ItemDetail = ({ product }) => {

    const { addItem } = React.useContext(CartContext);
    const [showButton, setShowButton] = useState(true);

    function onAdd(count) {
        addItem(product, count);
    }

    return <>
        <Container sx={
            {
                marginTop: 2,
                maxWidth: 850,
                display: 'flex',
                flexDirection: 'row',
            }
        }>
            <CardMedia
                sx={{
                    width: 320
                }}
                component="img"
                height="350"
                width="290"
                image={product.image}
                alt={product.brand}
            />
            <Container sx={
                {
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.brand} {product.model}
                    </Typography>
                    <Typography variant='body1' color="GrayText">
                        {product.brand}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" color={'#4caf50'}>
                        ${product.price}
                    </Typography>
                    <Typography variant='caption' color={'#0077b6'}>
                        Stock disponible: {product.stock}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {showButton ? 
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} setShowButton={setShowButton} ></ItemCount>
                        :
                        <Button size="small" >
                            <Link to={'/cart'} style={{color:'#0077b6', textDecoration:'none'}}> Finalizar Compra </Link>
                        </Button>
                    }
                </CardActions>
            </Container>
        </Container>

        <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            gap: 2
        }}>
            <RelatedItems idCategory={product.idCategory} model={product.model}></RelatedItems>
        </Container>
    </>
}

export default ItemDetail;