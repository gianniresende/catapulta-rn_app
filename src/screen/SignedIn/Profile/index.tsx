import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {useTheme} from 'styled-components';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useAuth from '~/hooks/useAuth';
import {Avatar, Container, Row, CardOptions, Divider} from './styles';
import Option from './localComponents/Option';
import Shadow from '~/components/Shadow';

const Profile: React.FC = () => {
  const {spacing} = useTheme();
  const {user} = useAuth();
  return (
    <Container>
      <ScrollView>
        <StatusBar barStyle={'dark-content'} />
        <Text typography="h5">Perfil</Text>
        <Separator height={spacing.lg} />
        <Row>
          <Avatar source={{uri: user?.avatar}} />
          <Separator width={spacing.sm} />
          <View>
            <Text typography="h7">{user?.firstName}</Text>
            <Text typography="h7">{user?.lastName}</Text>
          </View>
        </Row>
        <Separator height={spacing.lg} />
        <Shadow>
          <CardOptions>
            <Option title="Informações Pessoais" icon="profile" />
            <Divider />
            <Option title="Suporte" icon="notification" />
            <Divider />
            <Option title="Sair" icon="logout" />
          </CardOptions>
        </Shadow>
      </ScrollView>
    </Container>
  );
};

export default Profile;
