import { db } from "@/app/firebase";
import { collection, addDoc, doc, getDocs, deleteDoc, getDoc, query, where, updateDoc, arrayUnion, } from "firebase/firestore";
import { OrderItem } from "./components/interfaces/order_item";
import { NewUser } from "./components/interfaces/new_user";

enum enumOrderStatus {
    PENDING = 'pending',
    DELIVERED = 'delivered',
}

async function getAllPhones() {
    let phones: any = [];
    const querySnapshot = await getDocs(collection(db, "phones"));
    querySnapshot.forEach((doc) => {
        let phone = { id: doc.id, data: doc.data() }
        phones.push(phone);
    });

    return phones;

}

async function addNewPhone(name: String, brand: String, size: String, network: String, battery: String, frontCamera: String, backCamera: String, fingerPrint: String, android: String, description: String, simCard: String, price: String, memory: String, image: string) {
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
        image: image
    })
}

async function getBrands() {
    let brands: any = [];
    const querySnapshot = await getDocs(collection(db, 'brands'));
    querySnapshot.forEach((doc) => {
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
    });
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

async function addComment(phoneID: string, user: string, comment: string) {
    const phoneRef = doc(db, "phones", phoneID);
    await updateDoc(phoneRef, {
        comments: arrayUnion({ user: user, comment: comment, date: Date.now() })
    });


}
async function getComments(phoneID: string) {
    const phoneRef = doc(db, "phones", phoneID)
    const docSnap = await getDoc(phoneRef);
    if (docSnap.exists()) {
        const data: any = docSnap.data()
        if (data.comments === undefined) {
            return [{}]
        }
        return data.comments
    } else {
        return { msg: 'no such document' }
    }

}

async function addRating(phoneID: string, userID: string, userRating: number) {
    let totalRating: number = 0
    let numberOfRatings: number = 0
    let q = query(collection(db, 'ratings'), where("phoneID", "==", phoneID));
    let querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        const data = doc.data()
        totalRating += data.rating as number
        numberOfRatings++;
    });
    let newRating: number = (totalRating / numberOfRatings)
    newRating = Math.ceil(newRating)

    const phoneRef = doc(db, "phones", phoneID);
    await updateDoc(phoneRef, {
        rating: newRating
    });

    await addDoc(collection(db, 'ratings'), {
        userID: userID,
        phoneID: phoneID,
        rating: userRating
    })


}

async function hasAddedRating(userID: string, phoneID: string) {
    let res = false
    const q = query(collection(db, 'rating'), where("phoneID", "==", phoneID), where("userID", "==", userID));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => { 
        res = true
    })
    return res
}

async function createOrder(
    userID: string,
    cart: OrderItem[]
) {
    await addDoc(collection(db, 'orders'), {
        userID,
        cart,
        date: Date.now(),
        status: enumOrderStatus.PENDING
    })
}

async function getOrders() {

    let orders: any = [];
    const querySnapshot = await getDocs(collection(db, 'orders'));
    querySnapshot.forEach((doc) => {
        let order = { id: doc.id, data: doc.data() }
        orders.push(order);
    });

    return orders
}

async function getOrder(orderID: string) {
    const orderRef = doc(db, "orders", orderID)
    const docSnap = await getDoc(orderRef);
    if (docSnap.exists()) {
        const data: any = docSnap.data()
        return data
    } else {
        return { msg: 'no such document' }
    }

}

async function createNewUser(user: NewUser, userID: string) {
    await addDoc(collection(db, 'users'), {
        email: user.email,
        name: user.name,
        address: user.address,
        phoneNumber: user.phoneNumber,
        role: 'user',
        userID: userID
    })
    return { messsage: 'done' }
}
async function getUser(userID: string): Promise<any> {
    const q = query(collection(db, 'users'), where('userID', "==", userID))
    const querySnapshot = await getDocs(q);
    let foundUser: any
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        foundUser = data
    })
    return foundUser
}
async function getUserByEmail(email: string): Promise<any> {
    const q = query(collection(db, 'users'), where('email', "==", email))
    const querySnapshot = await getDocs(q);
    let foundUser: any
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        foundUser = data
    })
    return foundUser
}

async function updateStatus(orderID: string): Promise<any> {
    const orderRef = doc(db, "orders", orderID)
    const docSnap = await getDoc(orderRef);
    if (docSnap.exists()) {
        const data: any = await updateDoc(orderRef, {
            status: enumOrderStatus.DELIVERED
        });
        return true
    } else {
        return false
    }
}
async function addNewMessage(msg : any) {
    await addDoc(collection(db, 'messages'), {...msg, read: false, replied : false})
    return true
}
async function getMessages() {

    let messages: any = [];
    const querySnapshot = await getDocs(collection(db, 'messages'));
    querySnapshot.forEach((doc) => {
        let msg = { id: doc.id, data: doc.data(),  date: Date.now(), }
        messages.push(msg);
    });

    return messages
}
async function getMessage(msgID: string) {
    const msgRef = doc(db, "messages", msgID)
    const docSnap = await getDoc(msgRef);
    if (docSnap.exists()) {
        const data: any = docSnap.data()
        return data
    } else {
        return { msg: 'no such document' }
    }
}
async function updateRead(msgID: string): Promise<any> {
    const msgRef = doc(db, "orders", msgID)
    const docSnap = await getDoc(msgRef);
    if (docSnap.exists()) {
        const data: any = await updateDoc(msgRef, {
            read : true
        });
        return true
    } else {
        return false
    }
}


export {
    getBrands,
    addNewPhone,
    getAllPhones,
    deletePhone,
    getPhone,
    getPhonesByBrand,
    getPhonesByQuery,
    addComment,
    getComments,
    addRating,
    hasAddedRating,
    createOrder,
    getOrders,
    getOrder,
    createNewUser,
    getUser,
    getUserByEmail,
    updateStatus,
    enumOrderStatus,
    addNewMessage,
    getMessages,
    getMessage,
    updateRead,
}
