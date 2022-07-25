// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB0L11jYXAi1zQezFyYZfVpsujG27vcUCk',
  authDomain: 'house-marketplace-app-91d50.firebaseapp.com',
  projectId: 'house-marketplace-app-91d50',
  storageBucket: 'house-marketplace-app-91d50.appspot.com',
  messagingSenderId: '921885062389',
  appId: '1:921885062389:web:d3958b8c7e75b66b4941bc',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
