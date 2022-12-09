import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

// TODO: fix-> en ItemDetail, al clickear una categoria de NavBar, se muestran todos los productos sin filtrar

const ItemListContainer = () => {
    // Productos a mostrar
    const [prods, setProds] = useState(); // * prods filtrados
    const [allProds, setAllProds] = useState(); // * todos los producos
    // Obtención de URL param de la categoría solicitada
    const { categoryid } = useParams();

    const API_URL = "https://6391df6eac688bbe4c553a05.mockapi.io/api/v1/products/";

    //console.log("allProds antes de los hooks👇");
    //console.log(allProds);
    //console.log("prods antes de los hooks👇");
    //console.log(prods);

    // Selecciona los items con la categoryid especificada para renderizar
    function filterCategory() {
        //console.log("2 allprods 👇");
        //console.log(allProds);
        let filtProds = allProds?.filter((item) => item.categoryid === categoryid);
        setProds(filtProds);
        //console.log("3 filtprods 👇");
        //console.log(filtProds);
    }
    // Hook que se ejecuta una sola vez en el primer render
    useEffect(() => {
        fetch(API_URL)
            .then((resp) => resp.json())
            .then((data) => {
                setProds(data);
                setAllProds(data);
                //console.log("data👇");
                //console.log(data);
            })
            .catch((error) => {
                console.error("Error en la consulta a la API: ", error);
            });
    }, []);

    // Hook que se ejecuta cuando cambia el categoryid
    useEffect(() => {
        // Por el momento no se listan los productos por estar en promo
        //console.log("1 categoryid: " + categoryid);
        categoryid !== undefined ? filterCategory() : setProds(allProds);
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
                {prods?.length === 0 ? <p className="text-center">Por el momento no tenemos productos en esta categoria 😔</p> : <ItemList products={prods} />}
            </div>
        </>
    );
};

export default ItemListContainer;
