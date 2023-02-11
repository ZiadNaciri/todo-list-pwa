import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
//firebase
import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfbfZKRFQhQvoYKIXB1-PIZv8CsNfuw2s",
  authDomain: "todo-list-pwa-c0b69.firebaseapp.com",
  projectId: "todo-list-pwa-c0b69",
  storageBucket: "todo-list-pwa-c0b69.appspot.com",
  messagingSenderId: "230061029433",
  appId: "1:230061029433:web:1476c62d35074d6edbf5e8",
  measurementId: "G-P88EZ1D9D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


serviceWorkerRegistration.register();


reportWebVitals();
