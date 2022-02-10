import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6pUr-8dJofuRBQA5mHOzMbjwSc0NL23w",
    authDomain: "ecommerce-coder-6d11b.firebaseapp.com",
    projectId: "ecommerce-coder-6d11b",
    storageBucket: "ecommerce-coder-6d11b.appspot.com",
    messagingSenderId: "1077989644874",
    appId: "1:1077989644874:web:f34b0fbac31ccd1c01e4b3",
    measurementId: "G-GBMZD82FLZ"
};

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