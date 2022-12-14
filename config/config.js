
import  firebaseApp  from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
  apiKey: "AIzaSyD5QWIZVcNUYDkmTcfdg1zkH-mdCtzq6x8",
  authDomain: "react-native-course-demo-aecfd.firebaseapp.com",
  projectId: "react-native-course-demo-aecfd",
  storageBucket: "react-native-course-demo-aecfd.appspot.com",
  messagingSenderId: "459167700125",
  appId: "1:459167700125:web:d4a8eef6eb39138140f074",
  measurementId: "G-F80N5JV6RC"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export {firebase};