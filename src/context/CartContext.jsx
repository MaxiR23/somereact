import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart)

    const isInCart = (id) => {
        return cart.some(element => element.id === id);
    };
    
    function addItem(item, quantity) {
        if (isInCart(item.id)) {
            let newCart = cart;
            let indexProduct = newCart.findIndex(element => element.id === item.id);
            newCart[indexProduct].quantity = Number(newCart[indexProduct].quantity) + Number(quantity);
            setCart([...newCart]);
        } else {
            setCart([...cart, {...item, quantity: quantity}]);
        }
    }

    function removeItem(itemId) {
        setCart(cart.find(element => element.id === itemId));
    }

    const clear = () => {
        setCart([]);
    };
    
    return (
        <CartContext.Provider value={{
            addItem,
            cart,
            clear,
            removeItem           
        }}>
            {children}
        </CartContext.Provider>
    )
}
