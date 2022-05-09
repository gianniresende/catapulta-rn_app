import appleAuth from '@invertase/react-native-apple-authentication';
import React, {useEffect} from 'react';
import useAuth from '~/hooks/useAuth';
import BottonTabNavigator from './SignedInNavigator/BottonTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes: React.FC = () => {
  const {isSignedIn} = useAuth();

  useEffect(() => {
    if (!appleAuth.isSupported) {
      return;
    }
  });

  return isSignedIn ? <BottonTabNavigator /> : <SignInNavigator />;
};

export default Routes;
