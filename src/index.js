import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbfGoh7cEpAsF8fGxBj82Crm-cj0hggW0",
    authDomain: "natufriend-8ca5e.firebaseapp.com",
    projectId: "natufriend-8ca5e",
    storageBucket: "natufriend-8ca5e.appspot.com",
    messagingSenderId: "469378210397",
    appId: "1:469378210397:web:943bbedefa41c4d889cbb4",
    measurementId: "G-CBMCXGX1GG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
