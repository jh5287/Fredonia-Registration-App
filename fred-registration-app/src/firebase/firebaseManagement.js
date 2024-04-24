import { getDoc, setDoc, doc } from "firebase/firestore";
import { firestoreDB } from "@/firebase/config";

export const uploadCustomSems = async (userId, customSems, saveID) => {
    try {
        const userRef = doc(firestoreDB, `customsemesters/${saveID}`);
        const semesters = {}
        var id = 0;
        customSems.forEach(sem => {
            id++;
            console.error("Uploading custom semester: ", {sem})
            semesters[id] = sem;
        })
        console.error("Uploading custom semesters: ", {semesters})
        await setDoc(userRef, semesters, { merge: true });
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export const getCustomSems = async (id) => {
    try {
        const userRef = doc(firestoreDB, `customsemesters/${id}`);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            const customSems = []
            data.map((item) => {
                customSems.push(item);
            })
            console.error("Getting custom semesters: ", customSems)
            return customSems;
        }
    } catch (error) {
        console.error("Error getting document: ", error);
    }
    return [];
}