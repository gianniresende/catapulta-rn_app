/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

declare global {
  export type ProfileStackParamsList = {
    perfil: undefined;
    post: undefined;
  };

  export type ProfileStackNavigatorProp = NativeStackNavigationProp<
    ProfileStackParamsList,
    'perfil'
  >;
}
