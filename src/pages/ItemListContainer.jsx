import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../queries/Product";
import ItemList from "../components/Item/ItemList";
import ItemPlaceholder from "../components/Item/ItemPlaceholder";
import { Row } from "react-bootstrap";

// TODO: fix-> en ItemDetail, al clickear una categoria de NavBar, se muestran todos los productos sin filtrar

const ItemListContainer = () => {
    // State para placeholders/spinners
    const [isLoading, setLoading] = useState(true);
    // Productos a mostrar
    const [prods, setProds] = useState(); // * prods filtrados
    // Obtención de URL param de la categoría solicitada
    const { categoryid } = useParams();

    useEffect(() => {
        const db = getFirestore();
        getAllProducts(db)
            .then((items) => {
                setLoading(false);
                // Utilizo el condicional
                if (categoryid) {
                    // Si vino la categoría, filtramos
                    const filteredArray = items.filter((item) => item.categoryid === categoryid);
                    setProds(filteredArray);
                } else {
                    // Caso contrario, seteo el estado con todos los productos
                    setProds(items);
                }
            })
            .catch((error) => {
                console.error("Error en consulta a DB: ", error);
            });
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
                {isLoading && (
                    <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                        <ItemPlaceholder />
                        <ItemPlaceholder />
                        <ItemPlaceholder />
                    </Row>
                )}
                {!isLoading &&
                    (prods?.length === 0 ? (
                        <p className="text-center">Por el momento no tenemos productos en esta categoria 😔</p>
                    ) : (
                        <ItemList products={prods} />
                    ))}
            </div>
        </main>
    );
};

export default ItemListContainer;
