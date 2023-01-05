import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    const addToCart = (item, qty) => {
        if (cart.some((elem) => elem.id === item.id)) {
            let index = cart.findIndex((elem) => elem.id === item.id);
            let product = cart[index];
            product.qty += qty;
            const newCart = [...cart];
            // Elimina el elemento con qty vieja e inserta con qty actualizada
            newCart.splice(index, 1, product);
            setCart([...newCart]);
        } else {
            let product = { ...item, qty };
            setCart([...cart, product]);
        }
        getTotalQty();
        console.log(cart);
        console.log(totalItems);
    };

    const removeItemById = (id) => {
        const newCart = [...cart];
        let index = newCart.findIndex((elem) => elem.id === id);
        newCart.splice(index, 1);
        setCart([...newCart]);
        getTotalQty();
    };

    const clearCart = () => {
        setCart([]);
        getTotalQty();
        // agregar gestion de localstorage
    };

    const isInCart = (productID) => {
        return cart.some((item) => item.id === productID);
    };

    const getTotalPrice = () => {};

    const getTotalQty = () => {
        let itemCounter;
        cart.forEach((elem) => {
            itemCounter += elem.qty;
        });
        setTotalItems(itemCounter);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                removeItemById,
                clearCart,
                isInCart,
                getTotalPrice,
                totalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
