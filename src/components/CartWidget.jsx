import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({ itemsCount }) => {
    return (
        <div className="Cart-widget">
            <FontAwesomeIcon icon={faCartShopping} />
            <span> {itemsCount}</span>
        </div>
    );
};

export default CartWidget;
