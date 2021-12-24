// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Initialize Firebase
initializeApp({
  apiKey: 'AIzaSyB0QAZ9rBi9e5MvOwE3T9_Yz5_LSFuvb0A',
  authDomain: 'onlinestore-dd493.firebaseapp.com',
  projectId: 'onlinestore-dd493',
  storageBucket: 'onlinestore-dd493.appspot.com',
  messagingSenderId: '315093080873',
  appId: '1:315093080873:web:2bfd222171152ca9a43538',
})
// Storage
const firebaseStorage = getStorage()
// DB
const firestore = getFirestore()

export { firebaseStorage, firestore }
