import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container } from "@mui/system";
import { Button, IconButton, Typography } from "@mui/material";

export default function ItemCount({ stock, onAdd, setShowButton }) {

    const [count, setCount] = useState(1);
    
    const add = () => {
        if (count < stock) {
            console.log(stock)
            setCount(count + 1)
        }
    }
    
    const remove = () => {
        if (count > 1) {
            console.log(stock)
            setCount(count - 1)
        }
    }

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