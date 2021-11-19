/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Post from '~/screen/Post';
import Profile from '~/screen/Profile';

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="perfil">
      <Stack.Screen name="perfil" component={Profile}></Stack.Screen>
      <Stack.Screen name="post" component={Post}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
