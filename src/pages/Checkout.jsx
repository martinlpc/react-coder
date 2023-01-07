import CartItemList from "../components/CartItemList";
import "../queries/Orders";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

export const Checkout = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState();

    const handleEmailChange = (event) => {
        setEmail(event.currentTarget.value);
    };

    const handleCheckEmailChange = (event) => {
        event.currentTarget.text === email ? setValidated(true) : setValidated(false);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        //if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        //}
    };

    return (
        <main>
            <div className="title-cartpage mb-4">
                <h1>Checkout</h1>
            </div>
            <Container>
                <Row>
                    <Col xs={12} lg={8}>
                        <h2 className="mb-3">Resumen de tu orden</h2>
                        <CartItemList />
                    </Col>
                    <Col xs={12} lg={4}>
                        <h2 className="mb-3">Generá tu orden</h2>
                        <Form validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicData">
                                <Form.Label>Nombre y apellido</Form.Label>
                                <Form.Control required type="text" placeholder="Ingresa tu nombre y apellido" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Número de teléfono</Form.Label>
                                <Form.Control required type="number" placeholder="Cod. de área sin 0 y celular sin 15, por ej: 1123456789" />
                            </Form.Group>

                            <Form.Group onChange={handleEmailChange} className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" placeholder="Ingresa tu email" />
                            </Form.Group>

                            <Form.Group onChange={handleCheckEmailChange} className="mb-3" controlId="formBasicEmaiCheck">
                                <Form.Label>Repetí tu email</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu email" />
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={!validated} id="SubmitBtn">
                                Comprar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};
