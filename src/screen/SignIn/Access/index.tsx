import React from 'react';
import {StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components';
import splashImage from '~/assets/images/splash/SplashScreen.png';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import {
  Container,
  ContainerRounded,
  IconRoundedVaccine,
  IconVaccine,
  Column,
} from './styles';

const Access: React.FC = () => {
  const {spacing} = useTheme();
  const {bottom} = useSafeAreaInsets();
  const navigation = useSignInNavigation();

  /*
   * Callbacks
   */

  const handleNavigateToLogin = () => navigation.navigate('login');
  const handleNavigateToSignUp = () => navigation.navigate('signUp');


  return (
    <Container source={splashImage}>
      <StatusBar barStyle="light-content" />
      <Column>
        <IconRoundedVaccine>
          <IconVaccine icon="vaccinePlus" size={80} />
        </IconRoundedVaccine>
        <Separator height={spacing.md} />
        <Text typography="h2" color="background">
          Vacinadex
        </Text>
      </Column>
      <ContainerRounded>
        <Separator height={spacing.xl} />
        <Text typography="h4">Bem vindx</Text>
        <Separator height={spacing.sm} />
        <Text typography="subtitle1">Acesse ao app</Text>
        <Separator height={spacing.xxl} />
        <Button onPress={handleNavigateToLogin}>Login</Button>
        <Separator height={spacing.lg} />
        <Button mode="outlined" onPress={handleNavigateToSignUp}>
          Cadastro
        </Button>
        <Separator height={bottom + spacing.xxl} />
      </ContainerRounded>
    </Container>
  );
};

export default Access;
