import firebase from 'firebase';
  
const firebaseConfig = {
  apiKey: "AIzaSyDj9FWaYjEgYgVeS4xIIVFGIzMkYDMS8uo",
  authDomain: "sureazure-4227f.firebaseapp.com",
  projectId: "sureazure-4227f",
  storageBucket: "sureazure-4227f.appspot.com",
  messagingSenderId: "306353189198",
  appId: "1:306353189198:web:5888b57d0b98023d4dee1f",
  measurementId: "G-65RESSE2NJ"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};