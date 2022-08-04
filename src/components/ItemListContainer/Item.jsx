import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
    return (
        <Card sx={{ maxWidth: 320 }}>
            <CardMedia
                component="img"
                alt={item.brand}
                height="300"
                width="150"
                image={item.image}
            />
            <CardContent>
                <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                    {item.brand}
                </Typography>
                <Typography textAlign={'center'} variant="body2" color="text.secondary">
                       Modelo: {item.model}
                    </Typography>
                <Typography textAlign={'center'} variant="body2" color={'#4caf50'}>
                    {'$' + item.price}
                </Typography>
            </CardContent>
            <CardActions sx={{
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Button size="small">
                    <Link to={`/item/${item.id}`} style={{color:'#0077b6', textDecoration:'none'}}> Ver detalle del producto </Link>
                </Button>
                {item.stock < 1 ? 
                <Typography variant='caption'> Sin stock </Typography>
                :
                <Typography variant='caption'> Stock disponible: {item.stock} </Typography>
                }
            </CardActions>
        </Card>
    );
}
