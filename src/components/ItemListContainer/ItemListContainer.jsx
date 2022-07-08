import { CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { products } from "../../data/products";

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    let {idCategory} = useParams();
    
    useEffect(() => {

        let task = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        });

        task
            .then((response) => {
                if (!idCategory) {
                    setItems(response)
                } else {
                    const arrayFiltered = response.filter((item) => item.brand === idCategory);
                    setItems(arrayFiltered)
                }
            }, [idCategory])
            .catch((err) => console.warn(err))
            .finally(() => setLoading(false));
    }, [idCategory])

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