/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, createContext} from "react";
import {UserDTO} from "~/@types/dtos/user";
import {asyncUserKeys, AuthContextProp, RequestSignData} from "./types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInResource } from "~/services/resource/auth";

export const AuthContext = createContext<AuthContextProp>(
  {} as AuthContextProp,
);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<UserDTO>();
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [rehydrateLoading, setrehydrateLoading] = useState(true);

  /*
  * Callbacks
  */

  const signIn = async (data: RequestSignData) => {
    try {
      setLoading(true);
      const response = await signInResource(data);
      setUser(response.user);
      setLoading(false);
      setIsSignedIn(true);
      AsyncStorage.setItem(asyncUserKeys.user, JSON.stringify(response.user));
    } catch (error) {} finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setIsSignedIn(false);
    setUser(undefined);
    await AsyncStorage.clear();
  };

  const rehydrate = async () => {
    const rehydrateUser = await AsyncStorage.getItem(asyncUserKeys.user);

    if (rehydrateUser) {
      setUser(JSON.parse(rehydrateUser));
      setIsSignedIn(true);
    }
    setrehydrateLoading(false);
  };

  useEffect(() => {
    rehydrate();
  }, []);

  return (
    <AuthContext.Provider value={{user, loading, isSignedIn, signIn, signOut}}>
      {!rehydrateLoading && children}
    </AuthContext.Provider>
  );
};
