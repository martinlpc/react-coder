import React from "react";
import database from "../database.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [prod, setProd] = useState();

    function filterProdById() {
        let filtProd = database?.find((item) => item.id === parseInt(id));
        console.log("producto 👇");
        console.log(filtProd);
        setProd(filtProd);
    }

    useEffect(() => {
        // Simulamos fetch a API

        console.log("id: " + id);
        filterProdById();
    }, [id]);

    return (
        <div className="container-fluid">
            <ItemDetail item={prod} />
        </div>
    );
};

export default ItemDetailContainer;
