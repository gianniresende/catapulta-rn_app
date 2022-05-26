/* eslint-disable prettier/prettier */
import React from 'react';
import {Avatar, Container, Row} from './styles';

import headerImage from '~/assets/images/Header.png';
import useAuth from '~/hooks/useAuth';
import Text from '~/components/Text';
import {View} from 'react-native';
import { useTheme } from 'styled-components';
import Separator from '~/components/Separator';

const Header: React.FC = () => {
  const {spacing} = useTheme();
  const {user} = useAuth();
  return (
    <Container source={headerImage}>
      <Row>
        <View>
          <Text color="background" typography="h5">Bem-vindx</Text>
          <Text color="background" typography="h5">{user?.firstName}</Text>
        </View>
        <Avatar source={{uri: user?.avatar}} />
      </Row>
      <Separator height={spacing.xs} />
    </Container>
  );
};

export default Header;
