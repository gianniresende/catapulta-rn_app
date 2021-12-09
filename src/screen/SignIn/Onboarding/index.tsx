import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import {Container, ContainerColum, Doctor} from './styles';

const Onboarding: React.FC = () => {
  const {spacing} = useTheme();
  const {height} = useWindowDimensions();
  const {bottom, top} = useSafeAreaInsets();
  const navigation = useSignInNavigation();
  /*
  * State
  */
  const [heightDoctor, setHeightDoctor] = useState(0);

  /*
  * Callbacks
  */

  const handleNavigateToAccessScreen = () => navigation.navigate('access');

  const handleHeightToDoctor = (heightContainerBox: number) => {
    const freeSpace = height - (heightContainerBox + top + bottom + 100);
    setHeightDoctor(freeSpace);
  };

  return (
    <Container>
      <Doctor size={heightDoctor} icon="doctor" />
      <ContainerColum
        onLayout={e => handleHeightToDoctor(e.nativeEvent.layout.height)}>
        <Text typography="h4">
          Bem vindx ao <Text typography="h3"> Vacinadx</Text>
        </Text>
        <Separator height={spacing.xxl} />
        <Text typography="subtitle1">
          Sua carteira digital de vacinação de maneira fácil e prática de
          carregar!
        </Text>
        <Separator height={spacing.xxxl} />
        <Button onPress={handleNavigateToAccessScreen}>Começar</Button>
        <Separator height={spacing.md} />
      </ContainerColum>
    </Container>
  );
};

export default Onboarding;
