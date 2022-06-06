/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useTheme} from 'styled-components';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import {Container} from './styles';
import {SelectProps} from './types';

const localComponents = ({title, isSelected, onPress}: SelectProps) => {
  const {spacing} = useTheme();
  return (
    <Container onPress={onPress}>
      <Icon icon={isSelected ? 'radioButtonChecked' : 'radioButtonUnChecked'} />
      <Separator width={spacing.sm} />
      <Text color="surface600" typography="body3">
        {title}
      </Text>
    </Container>
  );
};

export default localComponents;
