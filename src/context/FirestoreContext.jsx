import { getFirestore } from "firebase/firestore";
import { createContext, useState } from "react";
import { getAllProducts } from "../queries/Product";
import "../queries/Categories";

export const FirestoreContext = createContext(null);

export const FirestoreProvider = ({ children }) => {
    const db = getFirestore();

    const [allProducts, setAllProducts] = useState([]);

    const queryAllProducts = () => {
        getAllProducts(db).then((items) => setAllProducts(items));
    };

    return <FirestoreContext.Provider value={{}}>{children}</FirestoreContext.Provider>;
};
