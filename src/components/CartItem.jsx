import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, removeItemById }) => {
    return (
        <article className="cart-item-card card">
            <div className="cart-item_remove" onClick={() => removeItemById(item.id)}>
                <FontAwesomeIcon icon={faXmark} color="blue" />
            </div>
            <div className="cart-item_img">
                <img src={item.img_src} alt="thumbnail" />
            </div>
            <h2 className="cart-item_name">{item.title}</h2>
            <span className="cart-item_price">${item.price}</span>
            <span className="cart-item_qty">Cantidad: {item.qty}</span>
            <span className="cart-item_totalprice">Total: ${item.qty * item.price}</span>
        </article>
    );
};

export default CartItem;
