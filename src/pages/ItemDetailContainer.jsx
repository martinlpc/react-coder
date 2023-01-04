import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [prod, setProd] = useState();
    const API_URL = "https://6391df6eac688bbe4c553a05.mockapi.io/api/v1/products/";

    useEffect(() => {
        fetch(API_URL + id)
            .then((resp) => resp.json())
            .then((data) => {
                setProd(data);
            })
            .catch((error) => {
                console.error("Error en la consulta a la API: ", error);
            });
    }, [id]);

    return (
        <div className="ItemDetailContainer container-fluid">
            <ItemDetail item={prod} />
        </div>
    );
};

export default ItemDetailContainer;
