import firebase from "firebase";

 const {
   REACT_APP_APIFIREBASE_KEY,
   REACT_APP_AUTHDOMAIN,
   REACT_APP_PROJECTID,
   REACT_APP_STORAGEBUCKET,
   REACT_APP_SENDERID,
   REACT_APP_APPID,
   REACT_APP_MEASUREMENTID
  } = process.env;


const firebaseConfig = {
  apiKey: REACT_APP_APIFIREBASE_KEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_SENDERID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
