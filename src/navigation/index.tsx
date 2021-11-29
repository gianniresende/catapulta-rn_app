import React, {useContext} from 'react';
import {AuthContext} from '~/context/Auth';
import BottonTabNavigator from './SignedInNavigator/BottonTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes: React.FC = () => {
  const {isLoggedIn} = useContext(AuthContext);

  return isLoggedIn ? <BottonTabNavigator /> : <SignInNavigator />;
};

export default Routes;
