import { CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    let {idCategory} = useParams();
    const {user} = useContext(AuthContext);

/*     console.log(user);
 */
    useEffect(() => {

        const db = getFirestore();

        const itemsRef = collection(db, 'items'); 
        getDocs(itemsRef)
        .then((snapshot) => {
            if (!idCategory) {
                setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            } else {
                const itemRef = query(
                    collection(db, 'items'), 
                    where('idCategory', '==', idCategory)
                );

                getDocs(itemRef).then((snapshot) => {
                    if (snapshot.size === 0) {
                        console.warn('no results')
                    }
                    setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))); 
                }) 
            }
        })
        .catch((err) => console.warn(err))
        .finally(setLoading(false));
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