import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwkH3cYCCDll7sm02aFPQWy9cPJQHBvvw",
    authDomain: "react60815.firebaseapp.com",
    projectId: "react60815",
    storageBucket: "react60815.appspot.com",
    messagingSenderId: "875369410196",
    appId: "1:875369410196:web:9baf7526115144c571ce81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
