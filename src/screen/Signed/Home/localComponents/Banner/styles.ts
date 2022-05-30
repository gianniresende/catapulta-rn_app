/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native';
import {ContainerProps} from './types';

export const Container = styled.Image<ContainerProps>`
  height: ${({h}) => h}px;
  width: ${({w}) => w}px;
  border-radius: ${({theme}) => theme.borders.radius.xs}px;
`;
