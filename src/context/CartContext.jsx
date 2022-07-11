import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(element => element.id === Number(id));
    }

    function addItem(item, quantity) {
        if (isInCart(item.id)) {
            let newCart = cart;
            let indexProduct = newCart.findIndex(element => element.id === Number(item.id));
            newCart[indexProduct].quantity = Number(newCart[indexProduct].quantity) + Number(quantity);
            setCart([...newCart]);
        } else {
            setCart([...cart, {...item, quantity: quantity}])
        }
    }

    function removeItem(itemId) {
        setCart(cart.filter(element => element.id !== itemId))
    }

    const clear = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}
