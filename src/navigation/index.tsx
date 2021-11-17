/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import home from '~/screen/home';
import Profile from '~/screen/Profile';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="Home" component={home}></Stack.Screen>
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Routes;
