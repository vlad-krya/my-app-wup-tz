import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD1MDSz1Bfub_sau0gNSy7AjECMKE8KKQg",
  authDomain: "wup-tz-base.firebaseapp.com",
  projectId: "wup-tz-base",
  storageBucket: "wup-tz-base.appspot.com",
  messagingSenderId: "213862386579",
  appId: "1:213862386579:web:372c02a3d03d08e2307666",
});

const firestore = firebase.firestore();

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{ firebase, firestore }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById("root")
);

reportWebVitals();
