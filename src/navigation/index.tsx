import React, {useState, useEffect} from 'react';
import {DevSettings} from 'react-native';
import BottonTabNavigator from './SignedInNavigator/BottonTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(
    () =>
      DevSettings.addMenuItem('Change Routes', () =>
        setIsLoggedIn(old => !old),
      ),
    [],
  );

  DevSettings.addMenuItem('Change Routes', () => setIsLoggedIn(old => !old));

  return isLoggedIn ? <BottonTabNavigator /> : <SignInNavigator />;
};

export default Routes;
