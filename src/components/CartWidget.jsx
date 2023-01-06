import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <div className="Cart-widget">
            <FontAwesomeIcon icon={faCartShopping} color="white" size="2x" />
            {totalItems !== 0 && <span className="qty-display">{totalItems}</span>}
        </div>
    );
};

export default CartWidget;
