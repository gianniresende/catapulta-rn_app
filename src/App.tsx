/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import useAppearence from '~/hooks/Appearence';
import Routes from './navigation';
import {AuthProvider} from './context/Auth';

const App: React.FC = () => {
  const {theme} = useAppearence();

  useEffect(() => {
    fetch('http://localhost:8080/api/test').then(res => {
      res.json().then(obj => console.log(obj));
    });
  }, []);

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

