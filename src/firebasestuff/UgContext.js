import React, { useState, useEffect, createContext } from "react";
import firebase from "../firebase";
import Loader from "../components/Loading";

export const UgContext = createContext();

export const UgProvider = ({ children }) => {
  const [ug, setUg] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const refUg = firebase.firestore().collection("ug");
  const refContact = firebase.firestore().collection("contacts");

  function getUg() {
    refUg.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUg(items);
    });
  }

  function getContacts() {
    refContact.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setContacts(items);
    });
  }

  function authero() {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }

  useEffect(() => {
    getUg();
    authero();
    getContacts();
    setLoading(false);
  }, []);

  // ug.map((ugs) => {
  //   console.log(ugs);
  //   return ugs;
  // });

  // Auth

  // --------------------------------------------------------

  if (loading) {
    return <Loader type="BallTriangle" color="#00BFFF" />;

    // return <p style={{ color: "blue" }}>Loading...</p>;
  }
  return (
    <UgContext.Provider value={{ ug, currentUser, contacts }}>
      {children}
    </UgContext.Provider>
  );
};
