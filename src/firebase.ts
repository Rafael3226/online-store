// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'
import { firebaseConfig } from './env'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Initialize Firebase
initializeApp(firebaseConfig)
// Storage
const firebaseStorage = getStorage()
// DB
const firestore = getFirestore()

export { firebaseStorage, firestore }
