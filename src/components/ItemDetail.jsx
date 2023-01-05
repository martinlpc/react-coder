import React from "react";
import { useContext } from "react";
import { CartContext, CartProvider } from "../context/CartContext";

import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const cartContext = useContext(CartContext);
    const { cart, addToCart } = cartContext;

    const onAdd = (qty) => {
        addToCart(item, qty);
    };

    return (
        <div className="row">
            <div className="col-md-5 text-center mt-2">
                <img className="w-100" src={item?.img_src} alt="..." />
            </div>
            <div className="container mt-2 col-md-7">
                <div className="col-md-12">
                    <h1>{item?.title}</h1>
                </div>
                <div className="col-md-12">
                    <h2>$ {item?.price}</h2>
                </div>
                <div className="col-md-12">
                    <p>{item?.text}</p>
                </div>
                <ItemCount stock={item?.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
