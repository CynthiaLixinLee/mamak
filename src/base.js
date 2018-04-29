import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVaVvyf7aXLaUJkVDMX3CiKOwuXGWmkLg",
  authDomain: "mamak-3c7f3.firebaseapp.com",
  databaseURL: "https://mamak-3c7f3.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
