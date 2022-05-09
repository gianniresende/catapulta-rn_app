/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import useAppearence from '~/hooks/Appearence';
import Routes from './navigation';
import {AuthProvider} from './context/Auth';

const App: React.FC = () => {
  const {theme} = useAppearence();

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      scopes: ['profile', 'email'],
      webClientId: '685792060120-vqajgkbtnvdaa334scq4675oa8e0q2jq.apps.googleusercontent.com',
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

