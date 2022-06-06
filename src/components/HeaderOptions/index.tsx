/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {Container} from '~/styles';
import Separator from '../Separator';
import {HeaderOptionsProps} from './types';

const HeaderOptions = ({
  left = <Separator height={50} />,
  center = <Separator width={1} />,
  right = <Separator width={1} />,
}: HeaderOptionsProps) => {
  const {spacing, colors} = useTheme();
  const highSeparatorStatusBar = useMemo(() => {
    return StatusBar.currentHeight
      ? StatusBar.currentHeight - spacing.md
      : spacing.sm;
  }, [spacing]);

  return (
    <>
      <Separator height={highSeparatorStatusBar} />
      <Container>
        {left}
        {center}
        {right}
      </Container>
    </>
  );
};

export default HeaderOptions;
