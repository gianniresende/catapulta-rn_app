/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line quotes
import {ImageProps} from "react-native";
// eslint-disable-next-line quotes
import {NameIconTypes} from "../../constants/icons";

export interface IconOptionProps {
  icon: NameIconTypes;
  size?: number;
  activeColor?: string;
}

export interface IconProps extends ImageProps, IconOptionProps {}
