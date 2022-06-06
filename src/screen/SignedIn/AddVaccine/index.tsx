/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Shadow from '~/components/Shadow';
import Text from '~/components/Text';
import {Card, Container, RowCard} from './styles';

const AddVaccine: React.FC = () => {
  const {spacing} = useTheme();
  const {goBack, navigate} = useNavigation();
  const handleGoToQrcode = () => navigate('qrCode');
  const handleGoToAddVaccineManually = () => navigate('addVaccineManually');
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <Separator height={spacing.md} />
      <Pressable onPress={goBack}>
        <Icon icon="back" />
      </Pressable>
      <Separator height={spacing.md} />
      <Text typography="h7">Adicionar vacinas</Text>
      <Separator height={spacing.sm} />
      <Text typography="caption">{"Gostaria de adicionar por meio de \nqual método?"}</Text>
      <Separator height={spacing.lg} />
      <Shadow onPress={handleGoToAddVaccineManually}>
        <Card>
          <RowCard>
            <Icon icon="pencil" size={22} />
            <Separator width={spacing.md}/>
            <Text typography="caption">Inserção Manual</Text>
          </RowCard>
          <Icon icon="arrowRight" size={12} />
        </Card>
      </Shadow>
      <Separator height={spacing.md} />
      <Shadow onPress={handleGoToQrcode}>
        <Card>
          <RowCard>
            <Icon icon="qrCode" size={22} />
            <Separator width={spacing.md}/>
            <Text typography="caption">Leitura de código QR</Text>
          </RowCard>
          <Icon icon="arrowRight" size={12} />
        </Card>
      </Shadow>
      <Separator height={spacing.md} />
    </Container>
  );
};

export default AddVaccine;
