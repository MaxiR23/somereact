import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import LockIcon from '@mui/icons-material/Lock';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import Grid from '@mui/material/Grid';
import { CartContext } from '../../context/CartContext';
import { useState } from 'react';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ product }) => {

    const { addItem } = React.useContext(CartContext);
    const [showButton, setShowButton] = useState(true);
    let disabled = false;

    if (product.stock < 1) {
        disabled = true;
    } else {
        disabled = false;
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const onAdd = count => addItem(product, count);

    return <>
        <Container fixed sx={{ mt: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={8}>
                    <Item>
                        {product.idCategory === 'Zapatillas' ? 
                        <img src={product.image} alt={product.model} width={'94%'} height={'auto'} />
                        :
                        <img src={product.image} alt={product.model} width={'75%'} height={'auto'} />
                        }
                    </Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item sx={{ py: 2.4 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.brand} {product.model}
                        </Typography>
                        <Typography variant='body1' color="GrayText">
                            {product.brand}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color={'#4caf50'}>
                            ${product.price}
                        </Typography>
                        {product.stock < 1 ?
                            <Typography variant='caption' color={'#0077b6'}>
                                Stock: No hay stock disponible
                            </Typography>
                            :
                            <Typography variant='caption' color={'#0077b6'}>
                                Stock disponible: {product.stock}
                            </Typography>
                        }


                        <Box sx={{ mt: 2 }}>
                            <KeyboardReturnIcon />
                            <Typography variant='h6'> Devolucion gratis </Typography>
                            <Typography variant='caption'> Tenes 30 días desde que lo recibis </Typography>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <CheckroomIcon />
                            <Typography variant='h6'> Calidad </Typography>
                            <Typography variant='caption'> Te garantizamos calidad en cada una de nuestras prendas </Typography>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <LockIcon />
                            <Typography variant='h6'> Compra protegida </Typography>
                            <Typography variant='caption'> Recibis el producto que esperabas o te devolvemos tu dinero </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            {showButton ?
                                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} setShowButton={setShowButton} disabled={disabled} ></ItemCount>
                                :
                                <Button size="medium" sx={{mt:7}}>
                                    <Link to={'/cart'} style={{ color: '#0077b6', textDecoration: 'none' }}> Finalizar Compra </Link>
                                </Button>
                            }
                        </Box>

                    </Item>
                </Grid>
            </Grid>
        </Container>
    </>
}

export default ItemDetail;

