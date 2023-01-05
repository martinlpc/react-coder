import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [qty, setQty] = useState(initial);

    const addProduct = (incr) => {
        setQty(qty + incr);
    };

    return (
        <>
            <div className="mt-2 col-12">
                <span>En stock: {stock} un.</span>
            </div>
            <div className="mt-2 col-12">
                <button className="btn btn-outline-primary btn-sm" onClick={() => addProduct(+1)} disabled={qty === stock ? true : null}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <span> {qty} </span>
                <button className="btn btn-outline-primary btn-sm" onClick={() => addProduct(-1)} disabled={qty === initial ? true : null}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
            <div className="mt-2 col-12">
                <button
                    onClick={() => {
                        onAdd(qty);
                    }}
                    className="btn btn-outline-primary btn-sm"
                >
                    <span>Agregar al carrito </span>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                </button>
            </div>
        </>
    );
};

export default ItemCount;
