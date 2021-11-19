/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { RouteProp } from "@react-navigation/core";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

declare global {
  export type HomeStackParamsList = {
    feed: undefined;
    stories: {para: string};
  };

  export type HomeStackNavigatorProp = NativeStackNavigationProp<
    HomeStackParamsList,
    'feed'
  >;

  export type StoriesHomeStackRouteProp = RouteProp<
    HomeStackParamsList,
    'stories'
  >;
}

