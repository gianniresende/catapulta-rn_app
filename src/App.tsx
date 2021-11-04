/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, { useRef } from 'react';
import {Alert, View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Icon from './components/Icon';
import Input from './components/Input';
import {InputValueRef} from './components/Input/types';
import Separator from './components/Separator';
import useAppearence from './hooks/Appearence';
import {Container} from './styles';

const App: React.FC = () => {
  const refEmail = useRef<InputValueRef>({value: ''});
  const refPassword = useRef<InputValueRef>({value: ''});

  const handlePress =  () => {
    Alert.alert(refEmail.current?.value || 'n tem', refPassword.current?.value || 'n tem');
  };

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
          <Icon icon="fantasma" size={150}></Icon>
        </View>
        <View>
          <Separator height={100} />
          <Input
            ref={refEmail}
            placeholder='jonhdoe@email.com'
            error=''
            icon='user'
            iconPosition='right'
            label='E-mail'
          />
          <Input
            ref={refPassword}
            placeholder='Sua senha'
            secureTextEntry
            error="user not exist"
            label='Password'
          />
        </View>
        <Separator height={100} />
        <Button color="error" mode='outlined' onPress={handlePress} loading>Change Icons</Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
