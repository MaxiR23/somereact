import { CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    let {idCategory} = useParams();

    useEffect(() => {

        const db = getFirestore();
        const itemsRef = collection(db, 'items');

        if (!idCategory) {
            getDocs(itemsRef).then((snapshot) => setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))))
            .catch((err) => console.warn(err))
            .finally(setLoading(false));
        } else {
            const itemRef = query(collection(db, 'items'), where('idCategory', '==', idCategory));
            getDocs(itemRef).then((snapshot) => setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))))
            .catch((err) => console.warn(err))
            .finally(setLoading(false))
        }

    }, [idCategory])

    return (
        <>
        <Container sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        }}>
            {loading && 
            <Container sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
                <CircularProgress />
            </Container>}
        </Container>
            <ItemList items={items}></ItemList>
        </>
    )
}

export default ItemListContainer;