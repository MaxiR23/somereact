import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item({ item }) {
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                component="img"
                alt={item.brand + ' ' + item.model}
                height="300"
                image={item.pictureUrl}
            />
            <CardContent>
                <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                    {item.brand}
                </Typography>
                <Typography textAlign={'center'} variant="body2" color="text.secondary">
                    {'$' + item.price.toFixed(3)}
                </Typography>
            </CardContent>
            <CardActions sx={{
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Button size="small">Ver detalle del producto</Button>
                <Typography variant='caption'> Stock disponible: {item.stock} </Typography>
            </CardActions>
        </Card>
    );
}
