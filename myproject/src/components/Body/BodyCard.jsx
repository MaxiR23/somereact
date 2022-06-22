import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

export default function BasicCard({ initial, disabled, disabled1, increment, decrement }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Sneakers
        </Typography>
        <Typography variant="h5" component="div">
          Nike Air Max 1 SH Treeline
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Nike
        </Typography>
        <Typography variant="body2">
          $350USD
          <br />
          {'"a good sneakers"'}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Button disabled={disabled1} onClick={() => decrement()} size='normal'>-</Button>
        <Typography sx={{ fontSize: 14, margin: 1 }} color="gray">
          {initial}
        </Typography>
        <Button disabled={disabled} onClick={() => increment()} size='normal'>+</Button>
      </CardActions>
      <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => alert('agregado')} color="primary" aria-label="add to shopping cart">
            <Typography sx={{ marginRight: 1 }}>
              Agregar al carrito
            </Typography>
            <AddShoppingCartIcon />
          </IconButton>
      </CardActions>
    </Card>
  );
}
