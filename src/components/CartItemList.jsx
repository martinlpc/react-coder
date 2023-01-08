import { useContext } from "react";
import { Col, Container } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CartItemList = () => {
    const { cart, removeItemById, totalPrice } = useContext(CartContext);

    return (
        <Col xs={12} lg={8}>
            <h2 className="mb-3">Productos en tu carrito</h2>
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
        </Col>
    );
};

export default CartItemList;
