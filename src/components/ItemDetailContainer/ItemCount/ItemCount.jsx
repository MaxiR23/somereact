import React, { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container } from "@mui/system";
import { Button, IconButton, Typography } from "@mui/material";
import { useCallback } from "react";

export default function ItemCount({ count, setCount, stock, onAdd, setShowButton }) {

    const add = () => { 
        if (count < stock) {
            setCount(count + 1)
        }}
    
    const remove = () => {
        if (count > 1) {
            setCount(count - 1)
        }}

    console.log('renderizado itemDetail')

    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'row' }}>
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
    )
}