import { CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {

        const products = [
            {
                id: 1,
                brand: 'iPhone',
                model: '13',
                pictureUrl: "https://i.ibb.co/gTxgvJX/iphone-13-pink.png",
                price: 250.000,
                stock: 5
            },
            {
                id: 2,
                brand: 'Samsung',
                model: 'Z Flip 3',
                pictureUrl: "https://i.ibb.co/yQnWKjD/Samsung-Galaxy-Z-Flip-3.png",
                price: 300.000,
                stock: 7
            },
            {
                id: 3,
                brand: 'Samsung',
                model: 's21 Ultra',
                pictureUrl: "https://i.ibb.co/MNz7V9P/samsung-s21-ultra.png",
                price: 320.000,
                stock: 2
            },
        ]

        let task = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        });

        task
            .then((response) => setItems(response))
            .catch((err) => console.warn(err))
            .finally(() => setLoading(false));

    }, [])

    return (
        <>
        <Container sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        }}>
            {loading && <CircularProgress />}
        </Container>

            <ItemList items={items}></ItemList>
        </>
    )
}

export default ItemListContainer;