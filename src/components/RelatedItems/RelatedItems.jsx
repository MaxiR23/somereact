import React from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const RelatedItems = ({ idCategory, model, setCount, count }) => {

    const [relatedProducts, setRelatedProducts] = React.useState([]);

    React.useEffect(() => {
        const db = getFirestore();
        const itemRef = query(
            collection(db, 'items'),
            where('idCategory', '==', idCategory));

        getDocs(itemRef).then((snapshot) => {
            if (snapshot.size === 0) {
                console.warn('No results')
            } else {
                setRelatedProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            }
        })
    }, [idCategory])

    const aux = relatedProducts.sort(() => Math.random() - Math.random()).slice(0, 5)

    return (
        <>
            {aux.map((e, i) => {
                if (e.model !== model) {
                    return (
                        <Card key={i} sx={{
                            maxWidth: 345,
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={e.image}
                                    alt={e.brand + e.model}
                                />
                                <CardContent>
                                    <Typography variant="body1" component="div">
                                        {e.brand}
                                    </Typography>
                                    {/* <Typography variant="caption" color="text.secondary">
                                    {e.model}
                                </Typography> */}
                                    <Typography variant="body2" color={'#4caf50'}>
                                        ${e.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Button size="small" color="primary" onClick={() => setCount( count = 1 )}>
                                    <Link to={`/item/${e.id}`} style={{ color: '#0077b6', textDecoration: 'none' }}> Ver detalle del producto </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    )
                } else {
                    return []
                }
            })}
        </>
    )
}
/* Realizo esto ya que al cambiar de items aparece uno nuevo! */
export default React.memo(RelatedItems)