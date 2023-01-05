import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;

    return (
        <div className="Cart-widget">
            <FontAwesomeIcon icon={faCartShopping} color="white" size="2x" />
            <span className="qty-display">{cart.totalItems}</span>
        </div>
    );
};

export default CartWidget;
