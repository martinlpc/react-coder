import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    const onAdd = (qty) => {
        addToCart(item, qty);
    };

    return (
        <div className="row">
            <div className="col-md-5 text-center mt-2">
                <img className="w-100" src={item?.img} alt="..." />
            </div>
            <div className="container mt-2 col-md-7">
                <div className="col-md-12">
                    <h1>{item?.title}</h1>
                </div>
                <div className="col-md-12">
                    <h2>$ {item?.price}</h2>
                </div>
                <div className="col-md-12">
                    <p>{item?.text}</p>
                </div>
                <ItemQuantitySelector stock={item?.stock} initial={1} handleAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
