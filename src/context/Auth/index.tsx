/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, createContext} from "react";
import {UserDTO} from "~/@types/dtos/user";
import {asyncUserKeys, AuthContextProp, RequestSignData} from "./types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInResource } from "~/services/resource/auth";
import { Alert } from "react-native";
import api from "~/services/api";
import { RequestCreateUserData } from "~/services/resource/user/types";
import { createUserResource } from "~/services/resource/user";

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

  const saveUserToStorageAndConfigToken = async (data: UserDTO) => {
    api.defaults.headers.Authorization = `Baerer ${data.token}`;
    await AsyncStorage.setItem(asyncUserKeys.user, JSON.stringify(data));
  };

  const signOut = async () => {
    setIsSignedIn(false);
    setUser(undefined);
    api.defaults.headers.Authorization = `Baerer `;
    await AsyncStorage.clear();
  };

  const signIn = async (data: RequestSignData) => {
    try {
      setLoading(true);
      const response = await signInResource(data);
      setUser(response.user);
      await saveUserToStorageAndConfigToken(response.user);
      setIsSignedIn(true);
    } catch (error) {
      Alert.alert('Não foi possível realizar o login', 'tente novamente');
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data: RequestCreateUserData) => {
    try {
      setLoading(true);
      const response = await createUserResource(data);
      setUser(response.user);
      console.log(response.user);
      await saveUserToStorageAndConfigToken(response.user);
      setIsSignedIn(true);
    } catch (error) {
      Alert.alert('Não foi possível realizar o Cadastro', 'tente novamente');
    } finally {
      setLoading(false);
    }
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
    <AuthContext.Provider value={{user, loading, isSignedIn, signIn, signUp, signOut}}>
      {!rehydrateLoading && children}
    </AuthContext.Provider>
  );
};
