import { getFirestore } from "firebase/firestore";
import React, { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getAllProducts } from "../queries/Product";
import ItemQuantitySelector from "./ItemQuantitySelector";

const ItemDetail = ({ item }) => {
    /*
    useEffect(() => {
        const db = getFirestore();
        console.log("getAllProducts👇🏻");
        getAllProducts(db).then((item) => {
            console.log(item);
        });
    }, []);
    */
    const { addToCart } = useContext(CartContext);

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
                <ItemQuantitySelector stock={item?.stock} initial={1} handleAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
