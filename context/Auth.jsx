// import { User } from "firebase";
// import { FC, createContext, useEffect, useState } from 'react';
import { createContext, useEffect, useState } from "react";

import firebase from "../utils/Firebase";

// type AuthContextProps = {
//   currentUser: User | null | undefined
// }

const AuthContext = createContext({ currentUser: undefined });
// createContext < AuthContextProps > { currentUser: undefined };

// const AuthProvider: FC = ({ children }) => {
const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  /* 下階層のコンポーネントをラップする */
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
