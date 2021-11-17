/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from '~/screen/Home';
import Profile from '~/screen/Profile';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Routes;
