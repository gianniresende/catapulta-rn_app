/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';


import useAppearence from '~/hooks/Appearence';
import Routes from './navigation';

const App: React.FC = () => {
  const {theme} = useAppearence();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
