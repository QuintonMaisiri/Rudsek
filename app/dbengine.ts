import { db } from "@/app/firebase";
import { collection, addDoc, doc, getDocs, deleteDoc, getDoc, query, where, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";

async function getAllPhones() {
    let phones: any = [];
    const querySnapshot = await getDocs(collection(db, "phones"));
    querySnapshot.forEach((doc) => {
        let phone = { id: doc.id, data: doc.data() }
        phones.push(phone);
    });

    return phones;

}

async function addNewPhone(name: String, brand: String, size: String, network: String, battery: String, frontCamera: String, backCamera: String, fingerPrint: String, android: String, description: String, simCard: String, price: String, memory: String) {
    await addDoc(collection(db, 'phones'), {
        name: name,
        brand: brand,
        size: size,
        network: network,
        battery: battery,
        frontCamera: frontCamera,
        backCamera: backCamera,
        fingerPrint: fingerPrint,
        android: android,
        description: description,
        simCard: simCard,
        price: price,
        memory: memory,
        // image: image
    })
}

async function getBrands() {
    let brands: any = [];
    const querySnapshot = await getDocs(collection(db, 'brands'));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let brand = { id: doc.id, data: doc.data() }
        brands.push(brand);
    });

    return brands

}

async function getPhonesByBrand(brand: string) {
    let phones: any = []
    const q = query(collection(db, 'phones'), where("brand", "==", brand));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        phones.push({ id: doc.id, data: doc.data() })
    });
    return phones
}

async function getPhonesByQuery(word: string) {
    let phones: any = []
    const q = query(collection(db, 'phones'), where("name", ">=", word));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        phones.push({ id: doc.id, data: doc.data() })
    }); console.log(phones)
    return phones
}

async function getPhone(phoneId: any) {
    const phoneRef = doc(db, "phones", phoneId);
    const docSnap = await getDoc(phoneRef);
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return { msg: 'no such document' }
    }


}

async function deletePhone(phoneId: any) {
    const phoneRef = doc(db, "phones", phoneId)
    await deleteDoc(phoneRef);

}

async function addComment(phoneID: string) {
    const phoneRef = doc(db, "phones", phoneID);
    await updateDoc(phoneRef, {
        comments: arrayUnion({ user: "name", comment: "comment", date: serverTimestamp() })
    });


}

export { getBrands, addNewPhone, getAllPhones, deletePhone, getPhone, getPhonesByBrand, getPhonesByQuery, addComment }