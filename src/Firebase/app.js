// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { store } from "redux/store";
// import { register } from 'redux/auth/auth-operations'
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from "helpers/auth";
// import { useEffect } from "react";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCJoxxRzhRdpZZIyS5-I_i0U2GwW0URHC0",
//   authDomain: "kapusta-7ec72.firebaseapp.com",
//   projectId: "kapusta-7ec72",
//   storageBucket: "kapusta-7ec72.appspot.com",
//   messagingSenderId: "378629725097",
//   appId: "1:378629725097:web:4a47a6b50aa18a42da82b8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


// const provider = new GoogleAuthProvider()

// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider).then((result) => {
//         console.log(result);
//         // const email = useSelector(state => state.auth.email);
//         const email = result.user.email;
//         const password = result.user.uid;

//         store.dispatch(login({email:email, password: password}))
//         // localStorage.setItem(email) 
//     })
//     .catch((error) => {
//         // console.log(error);
//     });
    
// }


// 576019218839-r0qvrtbgo3utp9s4tvvgn21rv60so4c7.apps.googleusercontent.com


