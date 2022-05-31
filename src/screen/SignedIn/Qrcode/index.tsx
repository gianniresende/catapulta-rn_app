/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import {Container} from './styles';

const Qrcode: React.FC = () => {
  const {spacing} = useTheme();
  const {goBack} = useNavigation();
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <Separator height={spacing.md} />
      <Pressable onPress={goBack}>
        <Icon icon="closeX" size={15} />
      </Pressable>
      <Separator height={spacing.md} />
      <Text typography="h7">Ler QR code</Text>
      <Separator height={spacing.sm} />
      <Text typography="caption">{"Posicione o código QR dentro da\n área"}</Text>
      <Separator height={spacing.lg} />
    </Container>
  );
};

export default Qrcode;
