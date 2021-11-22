import React from 'react';
import BottonTabNavigator from './SignedInNavigator/BottonTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes: React.FC = () => {
  const isLoggedIn = true;

  return isLoggedIn ? <BottonTabNavigator /> : <SignInNavigator />;
};

export default Routes;
