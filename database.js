import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  child,
  onValue,
  get,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

var firebaseConfig = {
  apiKey: "AIzaSyD3HkQcWtQjGtGBb5a89J_nbihC2t7mFFI",
  authDomain: "shopify-8f4e5.firebaseapp.com",
  projectId: "shopify-8f4e5",
  storageBucket: "shopify-8f4e5.appspot.com",
  messagingSenderId: "405026847561",
  appId: "1:405026847561:web:eef37e7d0b5827378b3898",
  measurementId: "G-EDR106WGXB",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
let send = document.getElementById("send");
let text = document.getElementById("inputText");
send.addEventListener("click", (e) => {
  var message = document.getElementById("inputText").value;
  const userId = push(child(ref(database), "users")).key;

  set(ref(database, "users/" + userId), {
    message: message,
  });
});
