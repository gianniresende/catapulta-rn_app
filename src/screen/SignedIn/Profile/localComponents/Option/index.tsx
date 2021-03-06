/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useTheme} from 'styled-components';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import {Circle, Container, Row} from './styles';
import {OptionsProps} from './types';

const Options = ({title, icon, onPress}: OptionsProps) => {
  const {colors, spacing} = useTheme();
  return (
    <Container onPress={onPress}>
      <Row>
        <Circle>
          <Icon icon={icon} size={15} activeColor={colors.background.main} />
        </Circle>
        <Separator width={spacing.sm} />
        <Text>{title}</Text>
      </Row>
      <Icon icon="arrowRight" size={13} activeColor={colors.primary.main} />
    </Container>
  );
};

export default Options;
