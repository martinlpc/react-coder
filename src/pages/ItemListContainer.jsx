import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../queries/Product";
import ItemList from "./ItemList";

// TODO: fix-> en ItemDetail, al clickear una categoria de NavBar, se muestran todos los productos sin filtrar

const ItemListContainer = () => {
    // Productos a mostrar
    const [prods, setProds] = useState(); // * prods filtrados
    const [allProds, setAllProds] = useState(); // * todos los producos
    // Obtención de URL param de la categoría solicitada
    const { categoryid } = useParams();

    // Selecciona los items con la categoryid especificada para renderizar
    function filterCategory() {
        setProds(allProds?.filter((item) => item.categoryid === categoryid));
    }
    // Hook que se ejecuta una sola vez en el primer render
    useEffect(() => {
        const db = getFirestore();
        getAllProducts(db)
            .then((items) => {
                setProds(items);
                setAllProds(items);
            })
            .catch((error) => {
                console.error("Error en consulta a DB: ", error);
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
            <div className="Body-itemListContainer container-fluid mx-1">
                {prods?.length === 0 ? <p className="text-center">Por el momento no tenemos productos en esta categoria 😔</p> : <ItemList products={prods} />}
            </div>
        </main>
    );
};

export default ItemListContainer;
