import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../../data/products";

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    let {idItem} = useParams() 

    useEffect(() => {
        let task = new Promise((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 2000);
        });

        task
            .then(response => {
                const item = response.find((item) => item.id === Number(idItem));
                setProduct(item)
            })
            .catch(err => console.warn(err))
            .finally(() => setLoading(false))
    }, [idItem])

    return (
        <div>
            {
                loading ?
                    <CircularProgress />
                    :
                    <ItemDetail product={product}></ItemDetail>
            }
        </div>
    )
}

{/* <ItemDetail {...product}></ItemDetail> otra forma de hacerlo */}

export default ItemDetailContainer;