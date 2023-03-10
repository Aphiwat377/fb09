import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'


import App from './App.vue'
import router from './router'

const firebaseConfig = {
    apiKey: "AIzaSyCd6zI-QJF-FUWQmuy7AdWawtoDzl5IJRA",
    authDomain: "jewelry-45ece.firebaseapp.com",
    projectId: "jewelry-45ece",
    storageBucket: "jewelry-45ece.appspot.com",
    messagingSenderId: "181539331499",
    appId: "1:181539331499:web:8137eb6ad562a2098dc6ee",
    measurementId: "G-8L6NY81D5Y"
  };








const initfirestore = initializeApp(firebaseConfig);
export const db = getFirestore(initfirestore);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.mount('#app')
