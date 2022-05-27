import React from 'react';
import Header from './localComponents/Header';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';
import {Container, ScrollViewItems} from './styles';
import {ScrollView, StatusBar} from 'react-native';
import Separator from '~/components/Separator';
import SmallCard from './localComponents/SmallCard';
import {useTheme} from 'styled-components';

const Home: React.FC = () => {
  const {spacing} = useTheme();
  const {signOut} = useAuth();
  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Header />
      <Separator height={spacing.md} />
      <ScrollViewItems horizontal>
        <SmallCard icon="vaccine" title={'Minhas\nvacinas'} />
        <Separator width={15} />
        <SmallCard icon="plus" title={'Adicionar\nvacinas'} />
        <Separator width={15} />
        <SmallCard icon="pin" title={'Procurar local\ndevacinação'} />
      </ScrollViewItems>
      <Separator height={50} />
      <Button onPress={signOut}>Sign Out</Button>
    </Container>
  );
};

export default Home;
