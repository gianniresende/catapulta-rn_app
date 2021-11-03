/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Icon from './components/Icon';
import Separator from './components/Separator';
import useAppearence from './hooks/Appearence';
import {Container} from './styles';

const App: React.FC = () => {
  const {theme} = useAppearence();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            }}>
          <Icon icon="ceifador" size={150}></Icon>
          <Separator width={30} />
          <Icon icon="fantasma" size={150}></Icon>
        </View>
        <Button color="error" mode='outlined' loading>Change Icons</Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
