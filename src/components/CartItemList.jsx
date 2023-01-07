import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CartItemList = () => {
    const { cart, removeItemById, clearCart, totalPrice } = useContext(CartContext);

    return (
        <>
            <Container as="section" className="cart-item-list-container container align-center">
                {cart ? (
                    cart.map((prod) => {
                        return <CartItem key={prod.id} item={prod} removeItemById={removeItemById} />;
                    })
                ) : (
                    <p>Cargando productos</p>
                )}
            </Container>
            <Container as="section" className="cart-item-list_total d-flex justify-content-center">
                {cart.length ? (
                    <>
                        <div className="mt-3">
                            <h3>Total en esta compra: $ {totalPrice}</h3>
                        </div>
                    </>
                ) : (
                    <p>Tu carrito está vacío 🍃</p>
                )}
            </Container>
        </>
    );
};

export default CartItemList;
