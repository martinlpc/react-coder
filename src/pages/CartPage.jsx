import CartItemList from "../components/CartItemList";

const CartPage = () => {
    return (
        <main>
            <div className="title-cartpage">
                <h1>Tu carrito</h1>
            </div>
            <CartItemList />
        </main>
    );
};

export default CartPage;
