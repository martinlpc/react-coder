import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../queries/Product";
import ItemDetail from "../components/Item/ItemDetail";
import { getFirestore } from "firebase/firestore";
import { Tadpole } from "react-svg-spinners";

const ItemDetailContainer = () => {
    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();
    const [prod, setProd] = useState();

    useEffect(() => {
        const db = getFirestore();
        getProductById(db, id)
            .then((item) => {
                setLoading(false);
                setProd(item);
            })
            .catch((error) => {
                console.error("Error en consulta a DB: ", error);
            });
    }, [id]);

    return (
        <main className="ItemDetailContainer container-fluid">
            {isLoading && <Tadpole color="#808080" width="100" height="100" />}
            {!isLoading &&
                (!prod ? (
                    <div className="row">
                        <h1 className="col-12">No existe el producto 🔍🤨</h1>
                        <Link className="col-12" to={"/"}>
                            Volver al home
                        </Link>
                    </div>
                ) : (
                    <ItemDetail item={prod} />
                ))}
        </main>
    );
};

export default ItemDetailContainer;
