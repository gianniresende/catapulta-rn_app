/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useState, createContext} from "react";

export const AuthContext = createContext({isLoggedIn: false});

export const AuthProvider: React.FC = ({children}) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return <AuthContext.Provider value={{isLoggedIn}}>{children}</AuthContext.Provider>;
};
