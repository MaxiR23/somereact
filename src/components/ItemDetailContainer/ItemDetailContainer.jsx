import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { CircularProgress } from "@mui/material";

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    let { idItem } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', idItem);

        getDoc(itemRef).then((snapshot) => {if (snapshot.exists()) {setProduct({ id: snapshot.id, ...snapshot.data() })}})
        .catch(err => console.warn(err))
        .finally(() => setLoading(false))

    }, [idItem])

    return (
        <div>
            {loading ?
            <CircularProgress />
            :
            <ItemDetail product={product}></ItemDetail>}
        </div>
    )
}

export default ItemDetailContainer;

// eslint-disable-next-line
{/* <ItemDetail {...product}></ItemDetail> otra forma de hacerlo */ }  
