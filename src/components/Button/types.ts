/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line quotes
import {TouchableOpacityProps} from "react-native";
// eslint-disable-next-line quotes
import {ColorsType} from "styled-components";

export type Mode = 'outlined' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  color?: ColorsType;
  mode?: Mode;
  loading?: boolean;
}
