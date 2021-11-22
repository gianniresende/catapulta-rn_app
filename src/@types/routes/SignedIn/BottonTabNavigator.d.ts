/* eslint-disable @typescript-eslint/no-unused-vars */
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

declare global {
  export type BottonTabParamsList = {
    home: undefined;
    profile: undefined;
  };

  export type StartBotonTabNavigationProp = BottomTabNavigationProp<
    BottonTabParamsList,
    'home'
  >;
}
