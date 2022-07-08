const TProductos = ({ productos }) => {
    return (
        productos.map((producto) => {
            return (
                <div key={producto.id}>
                    <h1> {producto.name} </h1>
                    <p> {producto.price} </p>
                </div>
            )
        })
    )
};

export default TProductos;
