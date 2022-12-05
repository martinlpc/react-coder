import React from "react";

const Item = (data) => {
    let img_src = "";
    return (
        <div className="card">
            <img src={img_src} alt="" />
            <h2>Nombre del producto</h2>
            <p>Descripción del producto</p>
            <span>$ precio</span>
            <button></button>
        </div>
    );
};

export default Item;
