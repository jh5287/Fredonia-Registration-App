import { getDoc, getDocs, setDoc, doc, collection } from "firebase/firestore";
import { firestoreDB } from "@/firebase/config";

export const uploadCustomSems = async (userId, customSems, saveID, name) => {
    try {
        const userRef = doc(firestoreDB, `customsemesters/${saveID}`);
        const semesters = {name: name};
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
            const customSems = {name: docSnap.data().name, semesters: []};
            Object.values(data).forEach((item) => {
                if (Array.isArray(item)) {
                    customSems.semesters.push(item);
                }
                
            })
            console.error("Getting custom semesters: ", customSems)
            return customSems;
        }
    } catch (error) {
        console.error("Error getting document: ", error);
    }
    return [];
}

export const getCustomList = async () => {
    try {
        const userRef = collection(firestoreDB, `customsemesters`);
        const docSnap = await getDocs(userRef);
        const customList = []
        docSnap.forEach((doc) => {
            customList.push({id: doc.id, name: doc.data().name});
        })
        return customList;
    } catch (error) {
        console.error("Error getting document: ", error);
    }
    return [];
}