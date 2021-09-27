// import React, { useState, useEffect, createContext } from "react";
// import Header from "../Header";
// import firebase from "../firebase";
// export const AuthContext = createContext();

// export const AuthProvider = () => {
//   const [loading, setLoading] = useState(true);
//   const [currentUser, setCurrentUser] = useState(null);

//   function authero() {
//     firebase.auth().onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });
//   }

//   useEffect(() => {
//     authero();
//     setLoading(false);
//   }, []);

//   // ug.map((ugs) => {
//   //   console.log(ugs);
//   //   return ugs;
//   // });

//   // Auth

//   // --------------------------------------------------------

//   if (loading) {
//     // return <Loader type="ThreeDots" color="#00BFFF" height={200} width={80} />;
//     return <p style={{ color: "blue" }}>Loading...</p>;
//   }
//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       <Header />
//     </AuthContext.Provider>
//   );
// };
