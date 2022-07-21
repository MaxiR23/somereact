import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCKQw5GnenPbZSsqH6z6kVbLYwN_qGz6lU",
    authDomain: "my-ecommerce-6cc8a.firebaseapp.com",
    projectId: "my-ecommerce-6cc8a",
    storageBucket: "my-ecommerce-6cc8a.appspot.com",
    messagingSenderId: "482964292115",
    appId: "1:482964292115:web:4e5bf7b5e1701e6cc6b5e6",
    measurementId: "G-F65S6EYP3D"
};
  
export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

/* borrar ReactStrictMode para practicar sin problemas sino se duplica */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
