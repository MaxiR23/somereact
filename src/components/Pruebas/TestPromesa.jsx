import { useState } from "react";
import { useEffect } from "react";
import TProductos from './TProductos';

const TestPromesa = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [productos, setProducto] = useState([])
    let pago;

    useEffect(() => {
        pago = new Promise((res, rej) => {
            setTimeout(() => {
                    res([
                        {
                            id: 1,
                            name: 'Zapa Nike',
                            price: 750
                        },
                        {
                            id: 2,
                            name: 'Zapa Adidas',
                            price: 850
                        },
                        {
                            id: 3,
                            name: 'Zapa Puma',
                            price: 1000
                        },
                    ]);
            }, 2000);
        });

        pago.then((resultado) => {setProducto(resultado)})
        .catch((err) => setError(true, err))
        .finally(() => setLoading(false));
    }, []);

    return (
        <>
        {loading && 'loading..'}
        {error && 'no hay productos'}
        {productos && <TProductos productos={productos}></TProductos>}
        </>
    )
};

export default TestPromesa;