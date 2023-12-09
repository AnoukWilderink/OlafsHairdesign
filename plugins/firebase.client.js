import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyBp77Axmd6F-WpOXkixlPm06Y_qD13zAE4",
        authDomain: "olaf-s-hairdesign-b8cc0.firebaseapp.com",
        projectId: "olaf-s-hairdesign-b8cc0",
        storageBucket: "olaf-s-hairdesign-b8cc0.appspot.com",
        messagingSenderId: "60636487868",
        appId: "1:60636487868:web:865f72b0411950732530b9",
    };

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    
    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})