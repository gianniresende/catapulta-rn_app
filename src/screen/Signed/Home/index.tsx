/* eslint-disable prettier/prettier */
import React from 'react';
import Header from './localComponents/Header';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';
import {Container, Content, ScrollViewItems} from './styles';
import {StatusBar} from 'react-native';
import Separator from '~/components/Separator';
import SmallCard from './localComponents/SmallCard';
import {useTheme} from 'styled-components';
import VaccineCard from '~/components/VaccineCard';
import Text from '~/components/Text';

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
      <Content>
        <Text typography="h7">Próxima Vacinas</Text>
        <Separator height={15} />
        <VaccineCard
          title="Triplice Viral"
          shot="single-dose"
          date={new Date(2022, 4, 1).toISOString()}
        />
        <Separator height={15} />
        <VaccineCard
          title="Febre Amarela"
          shot="first-dose"
          date={new Date(2022, 4, 1).toISOString()}
        />
        <Separator height={15} />
        <VaccineCard
          title="Pfizer"
          shot="second-dose"
          date={new Date().toISOString()}
        />
      </Content>
      <Separator height={100} />
      <Button onPress={signOut}>Sign Out</Button>
    </Container>
  );
};

export default Home;
