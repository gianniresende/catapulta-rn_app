/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Access from "~/screen/SignIn/Access";
import Login from "~/screen/SignIn/Login";
import Onboarding from "~/screen/SignIn/Onboarding";
import SignUp from "~/screen/SignIn/SignUp";
import SignUpStep2 from "~/screen/SignIn/SignUpStep2";

const Stack = createBottomTabNavigator<SignInStackParamsList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="onBoarding" component={Onboarding} />
      <Stack.Screen name="access" component={Access} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="SignUpStep2" component={SignUpStep2} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
