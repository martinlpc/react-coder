import React from "react";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="Box-ItemListContainer">
            <h2>{greeting}</h2>
            <p>La única tienda natural para tus amigxs no humanos</p>
        </div>
    );
};

export default ItemListContainer;
