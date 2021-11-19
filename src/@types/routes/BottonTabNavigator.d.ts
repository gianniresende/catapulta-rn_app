/* eslint-disable @typescript-eslint/no-unused-vars */
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/core';

declare global {
  export type BottonTabParamsList = {
    home: NavigatorScreenParams<HomeStackParamsList> | undefined;
    profile: NavigatorScreenParams<ProfileStackParamsList> | undefined;
  };

  export type StartBotonTabNavigationProp = BottomTabNavigationProp<
    BottonTabParamsList,
    'home'
  >;
}
