/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Access from "~/screen/SignIn/Access";
import Login from "~/screen/SignIn/Login";
import Onboarding from "~/screen/SignIn/Onboarding";
import SignUp from "~/screen/SignIn/SignUp";

const Stack = createBottomTabNavigator();

const SignInNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='onboarding' component={Onboarding} />
      <Stack.Screen name='acess' component={Access} />
      <Stack.Screen name='signUp' component={SignUp} />
      <Stack.Screen name='login' component={Login} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
