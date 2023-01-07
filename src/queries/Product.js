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
        // ! FS devuelve true aunque el documento no exista
        // ! _document === null => no existe
        if (querySnapshot.exists && querySnapshot._document !== null) {
            return {
                id: querySnapshot.id,
                ...querySnapshot.data(),
            };
        } else {
            return false;
        }
    } catch (error) {
        return error;
    }
};
