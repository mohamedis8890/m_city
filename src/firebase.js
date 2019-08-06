import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCqqskamyrEKYTADl6XJ6dkgmWA6SoDMxc",
	authDomain: "m-city-f1399.firebaseapp.com",
	databaseURL: "https://m-city-f1399.firebaseio.com",
	projectId: "m-city-f1399",
	storageBucket: "",
	messagingSenderId: "343956909422",
	appId: "1:343956909422:web:57435d874b9ce36b"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
