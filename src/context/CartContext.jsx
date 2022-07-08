import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(element => element.id === Number(id));
    }

    function addItem(item, quantity) {
        let itemAdded =
        {
            id: item.id,
            price: item.price,
            description: item.description,
            pictureURL: item.pictureURL,
            cantidad: item.quantity,
        }
        const exist = cart.some(prod => prod.id === itemAdded.id);
        if (exist) {
            const products = cart.map(prod => {
                if (prod.id === itemAdded.id) {
                    prod.quantity++;
                    return prod; 
                } else {
                    return prod; 
                }
            });
            setCart([products])
        } else {
            setCart([itemAdded])
        }

        console.log(exist)
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(element => element.id !== itemId))
    }

    const clear = () => {
        setCart([])
    }

    console.log(cart);

    return (
        <CartContext.Provider value={{
            cart,
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

