import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAiANBICdGY-mpbG1iItTNCGnF71e_S9oU",
    authDomain: "project-60-2be74.firebaseapp.com",
    databaseURL: "https://project-60-2be74-default-rtdb.firebaseio.com",
    projectId: "project-60-2be74",
    storageBucket: "project-60-2be74.appspot.com",
    messagingSenderId: "121238735396",
    appId: "1:121238735396:web:32ce7fe7ec98b77e84a6b1"
  };


// Initialize Firebase
let app =   firebase.initializeApp(firebaseConfig);
export default app.database();
