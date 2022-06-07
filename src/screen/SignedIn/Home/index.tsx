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
import Banner from './localComponents/Banner';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const {navigate} = useNavigation();
  const {spacing} = useTheme();
  const {signOut} = useAuth();
  const handleAddVaccine = () => navigate('addVaccine');

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <Header />
      <Separator height={spacing.md} />
      <ScrollViewItems horizontal>
        <SmallCard icon="vaccine" title={'Minhas\nvacinas'} />
        <Separator width={10} />
        <SmallCard
          icon="plus"
          title={'Adicionar\nvacinas'}
          onPress={handleAddVaccine}
        />
        <Separator width={10} />
        <SmallCard icon="pin" title={'Procurar local\ndevacinação'} />
      </ScrollViewItems>
      <Content>
        <Text typography="h7">Próxima Vacinas</Text>
        <Separator height={10} />
        <VaccineCard
          title="Triplice Viral"
          shot="single-dose"
          date={new Date(2022, 4, 1).toISOString()}
        />
        <Separator height={10} />
        <VaccineCard
          title="Febre Amarela"
          shot="first-dose"
          date={new Date(2022, 4, 1).toISOString()}
        />
        <Separator height={10} />
        <VaccineCard
          title="Pfizer"
          shot="second-dose"
          date={new Date().toISOString()}
        />
        <Separator height={10} />
        <Text typography="h8">Campanhas de Vacinação</Text>
        <Separator height={10} />
        <Banner source={require('~/assets/images/Banner/Banner.png')}/>
      </Content>
      <Button onPress={signOut}>Sign Out</Button>
    </Container>
  );
};

export default Home;
