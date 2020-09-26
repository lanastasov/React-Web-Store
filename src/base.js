import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqnlQTFo37LqhxWr8kBnAdx8paELAC3P0",
    authDomain: "catch-of-the-day---lanastasov.firebaseapp.com",
    databaseURL: "https://catch-of-the-day---lanastasov.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

// this is a default export
export default base;
