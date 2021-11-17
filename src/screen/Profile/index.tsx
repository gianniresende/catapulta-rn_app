import React from 'react';
import Text from '~/components/Text';
import {TouchableOpacity} from 'react-native';
import {Container} from './styles';

const Profile = ({navigation, route}) => {
  const {userName} = route.params;
  const handleNavigation = () => navigation.push('Profile');

  const handleUpdateParams = () =>
    navigation.setParams({
      userName: 'resendegianni',
  });

  const handleNavegateToHome = () =>
    navigation.navigate('Home', {
      selectedUser: 'resendegianni',
  });

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>{`Profile: ${userName}`}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleUpdateParams}>
        <Text>Update Params</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavegateToHome}>
        <Text>Navigate to home with params</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Profile;
