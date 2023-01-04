import { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addItem = () => {}; //funcion a definir

    const removeItem = () => {}; //funcion a definir

    const clearCart = () => {
        setCartProducts([]);
        // agregar gestion de localstorage
    };

    const isInCart = (productID) => {
        return cartProducts.some((item) => item.id === productID);
    };

    const getTotalPrice = () => {};

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                addItem,
                removeItem,
                clearCart,
                isInCart,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
