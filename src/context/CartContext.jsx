import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);   
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const isInCart = id => cart.some(element => element.id === id);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let newCart = cart;
            let indexProduct = newCart.findIndex(element => element.id === item.id);
            
            if(newCart[indexProduct].quantity + quantity > item.stock) return alert("No hay mas stock disponible");
            
            newCart[indexProduct].quantity = Number(newCart[indexProduct].quantity) + Number(quantity);
            setCart([...newCart]);
        } else {
            setCart([...cart, {...item, quantity: quantity}]);
        }
    }

    const removeItem = itemId => {
        const removeItem = setCart(cart.filter((e) => e.id !== itemId));
        if (removeItem) setCart(removeItem) 
    } 

    const clear = () => {
        setCart([])
        setQuantity(0)
        setTotal(0)
        localStorage.clear();
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        setQuantity(cart.reduce((pre, curr) => pre + curr.quantity, 0));
        const total = cart.reduce((pre, curr) => pre + curr.price * curr.quantity, 0);
        setTotal(total);
    }, [cart])

    return (
        <CartContext.Provider value={{
            addItem,
            cart,
            clear,
            removeItem,
            quantity,
            total           
        }}>
            {children}
        </CartContext.Provider>
    )
}
