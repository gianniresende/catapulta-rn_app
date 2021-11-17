import React from 'react';
import Text from '~/components/Text';
import {TouchableOpacity} from 'react-native';
import {Container} from './styles';

const Profile = ({navigation}) => {
  const handleNavigation = () => navigation.push('Profile');
  const handleNavigationToTop = () => navigation.popToTop('Profile');

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Go back to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigationToTop}>
        <Text>Go back to Top</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
