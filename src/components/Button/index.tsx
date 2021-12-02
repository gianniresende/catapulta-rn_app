/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useMemo} from 'react';
import {ThemeContext} from 'styled-components';
import {ButtonProps} from './types';

import {Container, Title, Loading} from './styles';

const Button = ({
  children,
  mode = 'contained',
  color = 'primary',
  onPress,
  ...rest
}: ButtonProps) => {
  const {colors} = useContext(ThemeContext);
  const colorByMode = useMemo(() => {
    return mode === 'outlined' ? colors[color].main : colors[color].onMain;
  }, [mode, color, colors]);

  return (
    <Container
      mode={mode}
      color={colors[color].main}
      borderColor={colors[color].main}
      onPress={onPress}
      {...rest}>
      <Title color={colorByMode}>{children}</Title>
    </Container>
  );
};

export default Button;
