import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
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
                <ItemCount stock={item?.stock} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;
