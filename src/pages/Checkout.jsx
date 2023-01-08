import CartItemList from "../components/CartItemList";
import "../queries/Orders";
import { Container, Row } from "react-bootstrap";

import { OrderForm } from "../components/OrderForm";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Checkout = () => {
    const { totalItems } = useContext(CartContext);
    return (
        <main>
            <div className="title-cartpage mb-4">
                <h1>Checkout</h1>
            </div>
            <Container>
                <Row>
                    <CartItemList />
                    {totalItems > 0 && <OrderForm />}
                </Row>
            </Container>
        </main>
    );
};
