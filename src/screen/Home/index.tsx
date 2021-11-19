/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '~/components/Text';
import {Container} from './styles';

const Home = ({navigation, route}) => {
  const data = route.params;

  const handleNavigation = () =>
    navigation.push('Profile', {
    userName: 'Gianni',
  });

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>{`Home: ${data?.selectedUser}`}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
