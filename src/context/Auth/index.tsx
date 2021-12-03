/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useState, createContext} from "react";
import {UserDTO} from "~/@types/dtos/user";
import {AuthContextProp} from "./types";
import axios from 'axios';

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

  const signIn = async ({email, password}: {email: string; password: string;}) => {
    setLoading(true);
    const response = await axios.post('http://localhost:8080/api/auth', {
      email,
      password,
    });
    console.log(response.data.user);
    setUser(response.data.user);
    setLoading(false);
    setIsSignedIn(true);
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
