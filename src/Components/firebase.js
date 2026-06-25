import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTBTr1z0qYe7kaZv3_Ug8WfSmzQwyuhaA",
  authDomain: "reactauthform.firebaseapp.com",
  projectId: "reactauthform",
  storageBucket: "reactauthform.firebasestorage.app",
  messagingSenderId: "388472009303",
  appId: "1:388472009303:web:36a31a4ab13a93a5de2912"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();