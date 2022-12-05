import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from "../database.json";
import Item from "../components/Item";

const ItemListContainer = () => {
    const { id } = useParams();
    const [cat, setCat] = useState();

    useEffect(() => {
        // Se ejecuta cuando cambia la id en la URL -> Petición a la API/DB/JSON
        console.log(database);
        fetch(database)
            .then((res) => {
                // console.log(res);
                res.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <>
            <div className="Title-itemListContainer">
                {id === undefined ? (
                    <p>Estos son nuestros productos</p>
                ) : (
                    <p>
                        Viendo la categoría <b>{id}</b>
                    </p>
                )}
            </div>
            <hr />
            <div className="Body-itemListContainer">
                <Item />
            </div>
        </>
    );
};

export default ItemListContainer;
