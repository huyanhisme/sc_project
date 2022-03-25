import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyC2GBQyWGaKh2mVyMsz-rw4zDcl4wYzYfE",
    authDomain: "myapp-5e5e4.firebaseapp.com",
    projectId: "myapp-5e5e4",
    storageBucket: "myapp-5e5e4.appspot.com",
    messagingSenderId: "977844500683",
    appId: "1:977844500683:web:171db61d02274adae4034e"
};
import {
    getAuth, signInWithPopup, GoogleAuthProvider
  } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();


const auth = getAuth();
auth.languageCode = 'it';


let btnGg = document.getElementById('btnGg');

btnGg.onclick = () =>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    // The signed-in user info.
    const user = result.user;
    localStorage.setItem('user_name', JSON.stringify(user.displayName));
    localStorage.setItem('user_ava', JSON.stringify(user.photoURL));
    location.assign('../Home/Home.html')
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}



