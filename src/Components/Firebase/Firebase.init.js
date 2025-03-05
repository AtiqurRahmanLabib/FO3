import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9nDe78NVMXmafWmn7gwEgq0hbIU8L6jI",
  authDomain: "fir-operation-3.firebaseapp.com",
  projectId: "fir-operation-3",
  storageBucket: "fir-operation-3.firebasestorage.app",
  messagingSenderId: "993002558572",
  appId: "1:993002558572:web:bcefa95c3246c03d057449"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;    
