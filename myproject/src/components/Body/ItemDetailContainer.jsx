import { CircularProgress, Container } from "@mui/material";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

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
                description: "Lo bueno, mejorado, Mételo en tu bolsillo, en tu bolso o en tus vaqueros más finos.Después sácalo y ábrelo para disfrutar de un smartphone 5G a pantalla completa, que se pliega en el ángulo que tú quieras. Parece que hemos intentado reinventar el smartphone plegable? ¡Pues eso es exactamente lo que hemos hecho!",
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
                res(products)
            }, 2000);
        });

        task
            .then(response => {
                const item = response.find((item) => item.id === 2);
                setProduct(item)
            })
            .catch(err => console.warn(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {
                loading ?
                    <CircularProgress />
                    :
                    <ItemDetail {...product}></ItemDetail>
            }
        </div>
    )
}

export default ItemDetailContainer;