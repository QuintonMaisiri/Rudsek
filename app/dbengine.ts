import { db } from "@/app/firebase";
import { collection, addDoc, doc, getDocs, deleteDoc } from "firebase/firestore";

async function addNewPhone(name: String, brand: String, size: String, network: String, battery: String, frontCamera: String, backCamera: String, fingerPrint: String, android: String, description: String, simCard: String, price: String) {
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
        // image: image
    })
}

async function getBrands() {
    let brands = [];
    const querySnapshot = await getDocs(collection(db, 'brands'));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let brand = { id: doc.id, data: doc.data() }
        brands.push(brand);
    });

    return brands

}

async function deletePhone(phoneId : any){
    const phoneRef = doc(db,"phones",phoneId)
    await deleteDoc(phoneRef);

}

export { getBrands, addNewPhone }