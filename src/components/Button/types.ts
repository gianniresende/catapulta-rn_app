/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line quotes
import React from "react";
import {TouchableOpacityProps} from "react-native";
// eslint-disable-next-line quotes
import {ColorsType, TypographyType} from "styled-components";

export type Mode = 'outlined' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  icon?: React.ReactNode;
  typography?: TypographyType;
  color?: ColorsType;
  mode?: Mode;
  loading?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
}
