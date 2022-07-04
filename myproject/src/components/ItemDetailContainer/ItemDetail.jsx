import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import StarsIcon from '../Utils/StartsIcon';
import { Box } from '@mui/material';
import ItemCount from './ItemCount/ItemCount';
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {

    function onAdd(count) {
        product.quantity = count;
        console.log(product);
    }
    
    return (
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
                width:320
            }}
                component="img"
                height="350"
                width="290"
                image={product.pictureUrl}
                alt={product.brand + product.model}
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
                    <Box>
                        <StarsIcon stars={product.stars}> </StarsIcon>
                    </Box>
                    <Typography variant='body1' color="GrayText">
                        ${product.price.toFixed(3)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Bateria: {product.battery.toFixed(3)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Camara: {product.camera}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Capacidad: {product.capacity} MB
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pantalla: {product.display}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Procesador: {product.processor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Resolucion: {product.resolution}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Ram: {product.ram} GB
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sistema Operativo: {product.so}
                    </Typography>
                    <Typography variant='caption' color={'green'}>
                        Stock disponible: {product.stock}
                    </Typography>
                </CardContent>
                <CardActions sx={{display:'flex', justifyContent:'flex-end'}}>
                    <ItemCount stock={product.stock} onAdd={onAdd}></ItemCount>
                    <Button size="small">
                    <Link to={'/cart'}> Finalizar Compra </Link>
                    </Button>
                </CardActions>
            </Container>
        </Container>
    )
}

export default ItemDetail;