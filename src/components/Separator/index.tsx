/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Container} from './styles';
import {Props} from './types';

// import { Container } from './styles';

const Separator = ({height, width}: Props) => {
  return <Container height={height} width={width} />;
};

export default Separator;
