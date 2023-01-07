import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../queries/Product";
import ItemDetail from "../components/ItemDetail";
import { getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [prod, setProd] = useState();

    useEffect(() => {
        const db = getFirestore();
        getProductById(db, id)
            .then((item) => {
                setProd(item);
            })
            .catch((error) => {
                console.error("Error en consulta a DB: ", error);
            });
    }, [id]);

    return (
        <main className="ItemDetailContainer container-fluid">
            {!prod ? (
                <div className="row">
                    <h1 className="col-12">No existe el producto 🔍🤨</h1>
                    <Link className="col-12" to={"/"}>
                        Volver al home
                    </Link>
                </div>
            ) : (
                <ItemDetail item={prod} />
            )}
        </main>
    );
};

export default ItemDetailContainer;
