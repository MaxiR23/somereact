import React from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container } from "@mui/system";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";

export default function ItemCount({ disabled, initial, stock, onAdd, setShowButton }) {

    const [count, setCount] = useState(initial)

    const add = () => { 
        if (count < stock) {
            setCount(count + 1)
        }}
    
    const remove = () => {
        if (count > 1) {
            setCount(count - 1)
        }}

    return (
        <>
        {disabled ? 
        <Box sx={{mt:3.4}}>
            <Typography> No hay stock </Typography>
            <Typography variant="caption"> De momento no tenemos stock del producto seleccionado. Estaremos reponiendo pronto. </Typography>
        </Box> 
        :
        <>
        <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center', mt:3 }}>
                <IconButton onClick={remove}>
                    <RemoveIcon />
                </IconButton>
                <Typography sx={{ margin: 2 }}>
                    {count}
                </Typography>
                <IconButton onClick={add}>
                    <AddIcon />
                </IconButton>
            </Container>
            <Button onClick={() => {
                onAdd(count)
                setShowButton(false)
            }}>
                Agregar al carrito
            </Button>
        </>
        }
        </>
    )
}