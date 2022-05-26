import React from 'react';
import Header from './localComponents/Header';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';
import {Container} from './styles';
import {StatusBar} from 'react-native';
import Separator from '~/components/Separator';

const Home: React.FC = () => {
  const {signOut} = useAuth();
  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Header />
      <Separator height={50} />
      <Button onPress={signOut}>Sign Out</Button>
    </Container>
  );
};

export default Home;
