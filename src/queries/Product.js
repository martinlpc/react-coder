import { collection, doc, getDoc, getDocs, setDoc, where, query, deleteDoc } from "firebase/firestore";

const PRODUCT_COLLECTION = "products";

export const getAllProducts = async (db) => {
    const collectionRef = collection(db, PRODUCT_COLLECTION);

    try {
        const querySnapshot = await getDocs(collectionRef);
        const products = [];
        querySnapshot?.docs?.forEach((item) => {
            products.push({
                id: item.id,
                ...item.data(),
            });
        });
        return products;
    } catch (error) {
        return error;
    }
};

export const getProductById = async (db, id) => {
    const documentRef = doc(db, PRODUCT_COLLECTION, id);

    try {
        const querySnapshot = await getDoc(documentRef);
        if (querySnapshot.exists) {
            return {
                id: querySnapshot.id,
                ...querySnapshot.data(),
            };
        }
    } catch (error) {
        return error;
    }
};
