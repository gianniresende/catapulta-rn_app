import React from 'react';
import useAuth from '~/hooks/useAuth';
import BottonTabNavigator from './SignedInNavigator/BottonTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes: React.FC = () => {
  const {isSignedIn} = useAuth();
  return isSignedIn ? <BottonTabNavigator /> : <SignInNavigator />;
};

export default Routes;
