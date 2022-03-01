import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRjZIewZ99G7kXPIRnVPZudwHNsVqlCZc",
    authDomain: "ecommerce-romero.firebaseapp.com",
    projectId: "ecommerce-romero",
    storageBucket: "ecommerce-romero.appspot.com",
    messagingSenderId: "82948182374",
    appId: "1:82948182374:web:9c0feb849a55400d82f8a7"
};

//Initialize firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}

export const generateOrder = (formData, cart, total) => {
    const db = getFirestore();
    const order = db.collection("orders");
    const newOrder = {
        buyer: formData,
        items: cart,
        total: total
    };
    return order.add(newOrder)
}