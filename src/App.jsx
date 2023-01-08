// Libraries and resources
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";

// Classes
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import Footer from "./components/Footer";
import { Checkout } from "./pages/Checkout";

function App() {
    return (
        <CartProvider>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />} />
                    <Route exact path="/cart" element={<Checkout />} />
                    <Route exact path="category/:categoryid" element={<ItemListContainer />} />
                    <Route exact path="item/:id" element={<ItemDetailContainer />} />
                </Routes>
                <Footer />
            </div>
        </CartProvider>
    );
}

export default App;
