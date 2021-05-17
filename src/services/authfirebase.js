import firebase from "./config/firebaseconfig";

const socialMediaAuth = (provider) => {
  return firebase
  .auth()
  .signInWithPopup(provider)
  .then((res) => {
    const {
      REACT_APP_APIFIREBASE_KEY,
      REACT_APP_AUTHDOMAIN,
      REACT_APP_PROJECTID,
      REACT_APP_STORAGEBUCKET,
      REACT_APP_SENDERID,
      REACT_APP_APPID,
      REACT_APP_MEASUREMENTID
     } = process.env;



     console.log(
       REACT_APP_APIFIREBASE_KEY,
       REACT_APP_AUTHDOMAIN,
       REACT_APP_PROJECTID,
       REACT_APP_STORAGEBUCKET,
       REACT_APP_SENDERID,
       REACT_APP_APPID,
       REACT_APP_MEASUREMENTID
      );
    return res.user;

  })
  .catch((error)=> {
    const {
      REACT_APP_APIFIREBASE_KEY,
      REACT_APP_AUTHDOMAIN,
      REACT_APP_PROJECTID,
      REACT_APP_STORAGEBUCKET,
      REACT_APP_SENDERID,
      REACT_APP_APPID,
      REACT_APP_MEASUREMENTID
     } = process.env;



     console.log(
       REACT_APP_APIFIREBASE_KEY,
       REACT_APP_AUTHDOMAIN,
       REACT_APP_PROJECTID,
       REACT_APP_STORAGEBUCKET,
       REACT_APP_SENDERID,
       REACT_APP_APPID,
       REACT_APP_MEASUREMENTID
      );
    return error;
  });
};

export default socialMediaAuth;
