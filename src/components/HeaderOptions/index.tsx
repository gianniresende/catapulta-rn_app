/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {Container} from '~/styles';
import Separator from '../Separator';
import {HeaderOptionsProps} from './types';

const HeaderOptions = ({
  left = <Separator />,
  center = <Separator />,
  right = <Separator />,
}: HeaderOptionsProps) => {
  const {spacing} = useTheme();
  const highSeparatorStatusBar = useMemo(() => {
    return StatusBar.currentHeight
      ? StatusBar.currentHeight + spacing.md
      : spacing.md;
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
