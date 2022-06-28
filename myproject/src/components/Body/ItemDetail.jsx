import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const ItemDetail = ({ pictureUrl, brand, description, model, price, stock }) => {
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
                component="img"
                height="360"
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
                        {brand}
                    </Typography>
                    <Typography>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarHalfIcon></StarHalfIcon>
                    </Typography>
                    <Typography variant='body1' color="GrayText">
                       ${price.toFixed(3)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant='caption'>
                        Stock disponible: {stock}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Comprar ahora</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Container>
        </Container>
    )
}

export default ItemDetail;