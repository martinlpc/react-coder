import { getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { getAllProducts, getProductById } from "../queries/Product";
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
