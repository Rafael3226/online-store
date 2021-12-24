// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'
//import { env } from './env'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY, //?? env.API_KEY,
  authDomain: 'onlinestore-dd493.firebaseapp.com',
  projectId: 'onlinestore-dd493',
  storageBucket: 'onlinestore-dd493.appspot.com',
  messagingSenderId: process.env.MESSAGING_SENDER_ID, //?? env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID, //?? env.APP_ID,
}

// Initialize Firebase
initializeApp(firebaseConfig)
// Storage
const firebaseStorage = getStorage()
// DB
const firestore = getFirestore()

export { firebaseStorage, firestore }
