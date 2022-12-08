import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from "../database.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    // Productos a mostrar
    const [prods, setProds] = useState();
    // Obtención de URL param de la categoría solicitada
    const { categoryid } = useParams();

    // Selecciona los items con la categoryid especificada para renderizar
    function filterCategory() {
        let filtProds = database?.filter((item) => item.categoryid === categoryid);
        setProds(filtProds);
    }
    // Hook que se ejecuta una sola vez al cargar en el primer render
    useEffect(() => {
        // En esta etapa del desarrollo, se simula consultas a una API leyendo
        // datos de un JSON local en cada carga de ItemListContainer
        setProds(database);
    }, []);

    // Hook que se ejecuta cuando cambia el categoryid
    useEffect(() => {
        // Por el momento no se listan los productos por estar en promo
        categoryid !== undefined ? filterCategory() : setProds(database);
    }, [categoryid]);

    return (
        <>
            <div className="Title-itemListContainer mt-2">
                {categoryid === undefined ? (
                    <h2>Estos son todos nuestros productos</h2>
                ) : (
                    <h2>
                        Viendo la categoría <b>{categoryid}</b>
                    </h2>
                )}
            </div>

            <div className="Body-itemListContainer container-fluid">
                <ItemList products={prods} />
            </div>
        </>
    );
};

export default ItemListContainer;
