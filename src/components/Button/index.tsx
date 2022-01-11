/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useMemo} from 'react';
import {ThemeContext} from 'styled-components';
import {ButtonProps} from './types';

import {Container, Title, Loading, AbsolutePosition} from './styles';

const Button = ({
  children,
  icon,
  typography = 'body2',
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
      {!!icon && <AbsolutePosition>{icon}</AbsolutePosition>}
      <Title typography={typography} color={colorByMode}>{children}</Title>
    </Container>
  );
};

export default Button;
