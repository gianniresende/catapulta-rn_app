/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Feed from '~/screen/Feed';
import Stories from '~/screen/Stories';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="feed" component={Feed}></Stack.Screen>
      <Stack.Screen name="stories" component={Stories}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;