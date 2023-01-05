import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

//import { useCart } from "../context/CartContext";

// TODO: fix-> en ItemDetail, al clickear una categoria de NavBar, se muestran todos los productos sin filtrar

const ItemListContainer = () => {
    // Context del cart
    // eslint-disable-next-line
    //const data = useCart;

    // Productos a mostrar
    const [prods, setProds] = useState(); // * prods filtrados
    const [allProds, setAllProds] = useState(); // * todos los producos
    // Obtención de URL param de la categoría solicitada
    const { categoryid } = useParams();

    const API_URL = "https://6391df6eac688bbe4c553a05.mockapi.io/api/v1/products/";

    // Selecciona los items con la categoryid especificada para renderizar
    function filterCategory() {
        let filtProds = allProds?.filter((item) => item.categoryid === categoryid);
        setProds(filtProds);
    }
    // Hook que se ejecuta una sola vez en el primer render
    useEffect(() => {
        fetch(API_URL)
            .then((resp) => resp.json())
            .then((data) => {
                setProds(data);
                setAllProds(data);
            })
            .catch((error) => {
                console.error("Error en la consulta a la API: ", error);
            });
    }, []);

    // Hook que se ejecuta cuando cambia el categoryid
    useEffect(() => {
        // Por el momento no se listan los productos por estar en promo
        categoryid !== undefined ? filterCategory() : setProds(allProds);
    }, [categoryid]);

    return (
        <main className="ItemListContainer">
            <div className="Title-itemListContainer mt-2">
                {categoryid === undefined ? (
                    <h1>Estos son todos nuestros productos</h1>
                ) : (
                    <h1>
                        Viendo la categoría <b>{categoryid}</b>
                    </h1>
                )}
            </div>
            <div className="Body-itemListContainer container-fluid">
                {prods?.length === 0 ? <p className="text-center">Por el momento no tenemos productos en esta categoria 😔</p> : <ItemList products={prods} />}
            </div>
        </main>
    );
};

export default ItemListContainer;
