import { getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export const uploadCustomSems = async (userId, customSems) => {
    try {
        const userRef = doc(db, `customsemesters/${userId}`, id);
        await setDoc(userRef, { customSems }, { merge: true });
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export const getCustomSems = async (userId, id) => {
    try {
        const userRef = doc(db, `customsemesters/${userId}`, id);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            return docSnap.data().customSems;
        }
    } catch (error) {
        console.error("Error getting document: ", error);
    }
    return [];
}