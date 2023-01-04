import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [qtyToAdd, setQtyToAdd] = useState(initial);

    const addHandler = () => {};

    return (
        <>
            <div className="mt-2 col-12">
                <span>En stock: {stock} un.</span>
            </div>
            <div className="mt-2 col-12">
                <button className="btn btn-outline-primary btn-sm">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <span> {qtyToAdd} </span>
                <button className="btn btn-outline-primary btn-sm">
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
            <div className="mt-2 col-12">
                <button className="btn btn-outline-primary btn-sm">
                    <span>Agregar al carrito </span>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                </button>
            </div>
        </>
    );
};

export default ItemCount;
