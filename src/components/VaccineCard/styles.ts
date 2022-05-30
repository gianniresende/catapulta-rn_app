/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {BadgeLeftProps, ChipsProps} from './types';

const widthBagdeLeft = 13;

export const Container = styled.View`
  height: 100px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background.main};
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${({theme}) => theme.spacing.md + widthBagdeLeft}px;
  padding-right: ${({theme}) => theme.spacing.md};
  padding-top: ${({theme}) => theme.spacing.md};
  padding-bottom: ${({theme}) => theme.spacing.md};
`;

export const BadgeLeft = styled.View<BadgeLeftProps>`
  position: absolute;
  width: ${widthBagdeLeft}px;
  min-width: ${widthBagdeLeft}px;
  max-width: ${widthBagdeLeft}px;
  height: 100px;
  border-top-left-radius: ${({theme}) => theme.borders.radius.sm};
  border-bottom-left-radius: ${({theme}) => theme.borders.radius.sm};
  background-color: ${({color}) => color};
`;

export const ChipWrap = styled.View`
  flex-direction: row;
`;

export const Chip = styled.View<ChipsProps>`
  flex-direction: row;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  align-items: center;
  justify-content: center;
  padding: 0px 14px;
  background-color: ${({color}) => color};
`;

export const VaccineDate = styled.View`
  flex-direction: row;
  align-items: center;
`;
