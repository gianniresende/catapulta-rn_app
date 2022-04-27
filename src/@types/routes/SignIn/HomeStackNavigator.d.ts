/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { RouteProp } from "@react-navigation/core";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

declare global {
  export type SignInStackParamsList = {
    access: undefined;
    login: undefined;
    signUp: undefined;
    SignUpStep2: {
      email: string,
      firstName: string,
      lastName: string
    };
    onBoarding: undefined;
  };

  export type SignInStackNavigatorProp = NativeStackNavigationProp<
    SignInStackParamsList,
    'access'
  >;

  export type SignUpStep2SignInStackRouteProp = RouteProp<
    SignInStackParamsList,
    'SignUpStep2'
  >;
}
