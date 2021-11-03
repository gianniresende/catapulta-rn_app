/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';
import Icon from './components/Icon';
import Text from './components/Text';
import useAppearence from './hooks/Appearence';
import {Container} from './styles';

const App: React.FC = () => {
  const {theme} = useAppearence();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Button onPress={() => {}} />
        <Text typography="h4" color="secondary">
          Text
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            }}>
          <Icon icon="ceifador" size={150} activeColor="primary"></Icon>
          <Icon icon="pieChart" size={150} activeColor="secondary"></Icon>
          <Icon icon="fantasma" size={150}></Icon>
        </View>
      </Container>
    </ThemeProvider>
  );
};

export default App;
