import { getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Button, Col, Form, Alert } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { setOrder } from "../queries/Orders";

export const OrderForm = () => {
    const [validated, setValidated] = useState(false);

    const submitBtn = document.getElementById("SubmitBtn");
    const telInput = document.getElementById("TelInput");
    const emailInput = document.getElementById("EmailInput");
    const emailInputCheck = document.getElementById("EmailInputCheck");
    const nameInput = document.getElementById("NameInput");

    // Utiliza el CartContext para generar la orden con los productos
    const { cart, totalPrice } = useContext(CartContext);

    const checkSameEmail = () => {
        if (emailInput.value === emailInputCheck.value) {
            return true;
        } else {
            return false;
        }
    };

    const handleOnKeyDownTel = (event) => {
        const input = event.key;
        const validChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "Delete", "ArrowRight", "ArrowLeft", "Tab"];

        if (event.currentTarget.value.length === 0 && input === "0") {
            event.preventDefault();
        }
        if (!validChars.includes(input)) {
            event.preventDefault();
        }
    };

    const handleOnKeyUpTel = (event) => {
        let telValue = event.currentTarget.value;
        telValue.startsWith("0") && (telInput.value = telValue.slice(1));
    };

    const handleOnKeyUpEmail = (event) => {
        setValidated(checkSameEmail());
    };

    const handleOnKeyUpEmailCheck = (event) => {
        emailInput.length > 0 && checkSameEmail() && (submitBtn.disabled = false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const orderProds = cart.map((prod) => ({
            product_id: prod.id,
            product_name: prod.title,
            product_price: prod.price,
            product_qty: prod.qty,
            product_text: prod.text,
        }));

        const order = {
            name: nameInput.value,
            email: emailInput.value,
            tel: telInput.value,
            total_price: totalPrice,
            products: orderProds,
        };

        console.log(order);
        const db = getFirestore();
        const orderIdFromFB = await setOrder(db, order);
        console.log(orderIdFromFB);
    };

    return (
        <Col xs={12} lg={4}>
            <h2 className="card-title mb-3">Generá tu orden</h2>
            <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control id="NameInput" required="true" type="text" placeholder="Ingresa tu nombre y apellido" />
                    <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Número de celular</Form.Label>
                    <Form.Control
                        id="TelInput"
                        required="true"
                        onKeyDown={handleOnKeyDownTel}
                        onKeyUp={handleOnKeyUpTel}
                        placeholder="Cod. de área sin 0 y sin 15, ej: 1123456789"
                        maxLength={10}
                    />
                    <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onKeyUp={handleOnKeyUpEmail} id="EmailInput" required="true" type="email" placeholder="Ingresa tu email" />
                    <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Repetí tu email</Form.Label>
                    <Form.Control id="EmailInputCheck" onKeyUp={handleOnKeyUpEmailCheck} required="true" type="email" placeholder="Ingresa tu email" />
                    <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
                </Form.Group>

                <Button onSubmit={handleSubmit} variant="primary" type="submit" disabled={!validated} id="SubmitBtn">
                    Comprar
                </Button>
            </Form>
        </Col>
    );
};
