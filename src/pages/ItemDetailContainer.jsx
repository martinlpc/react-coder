import React from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();

    return <h1>Detalle de {id}</h1>;
};

export default ItemDetailContainer;
