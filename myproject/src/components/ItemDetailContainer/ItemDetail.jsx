import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import StarsIcon from '../Utils/StartsIcon';
import { Box } from '@mui/material';

const ItemDetail = ({ pictureUrl, brand, battery, camera, capacity, display, model, price, processor, ram, resolution, so, stars, stock }) => {
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
                image={pictureUrl}
                alt={brand + model}
            />
            <Container sx={
                {
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {brand} {model}
                    </Typography>
                    <Box>
                        <StarsIcon stars={stars}> </StarsIcon>
                    </Box>
                    <Typography variant='body1' color="GrayText">
                        ${price.toFixed(3)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Bateria: {battery.toFixed(3)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Camara: {camera}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Capacidad: {capacity} MB
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pantalla: {display}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Procesador: {processor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Resolucion: {resolution}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Ram: {ram} GB
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sistema Operativo: {so}
                    </Typography>
                    <Typography variant='caption' color={'green'}>
                        Stock disponible: {stock}
                    </Typography>
                </CardContent>
                <CardActions sx={{display:'flex', justifyContent:'flex-end'}}>
                    <Button size="small">Comprar ahora</Button>
                </CardActions>
            </Container>
        </Container>
    )
}

export default ItemDetail;