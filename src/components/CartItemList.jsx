import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CartItemList = () => {
    const { cart, removeItemById, clearCart, totalPrice } = useContext(CartContext);

    return (
        <>
            <section className="cart-item-list-container container align-center">
                {cart ? (
                    cart.map((prod) => {
                        return <CartItem key={prod.id} item={prod} removeItemById={removeItemById} />;
                    })
                ) : (
                    <p>Cargando productos</p>
                )}
            </section>
            <section className="cart-item-list_total container d-flex justify-content-center">
                {cart.length ? (
                    <>
                        <div>
                            <p>{totalPrice}</p>
                        </div>
                        <div className="cart-item-list_buttons container d-flex justify-content-around">
                            <button className="btn btn-danger" onClick={clearCart}>
                                Vaciar carrito
                            </button>
                            <button className="btn btn-primary">Proceder con la compra</button>
                        </div>
                    </>
                ) : (
                    <p>Tu carrito está vacío 🍃</p>
                )}
            </section>
        </>
    );
};

export default CartItemList;
