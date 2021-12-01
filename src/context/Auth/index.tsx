/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useState, createContext} from "react";
import {Alert} from "react-native";
import {UserDTO} from "~/@types/dtos/user";
import {AuthContextProp} from "./types";

export const AuthContext = createContext<AuthContextProp>(
  {} as AuthContextProp,
);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<UserDTO>();
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  /*
  * Callbacks
  */

  const signIn = async (data?: {email: string; password: string;}) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(() => resolve('ok'), 2000));
    setLoading(false);
    setIsSignedIn(true);
    setUser({id: '12547df-136454afd-13451-132489'});
  };

  const signOut = () => {
    setIsSignedIn(false);
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{user, loading, isSignedIn, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
