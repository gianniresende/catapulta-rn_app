/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line quotes
import {ImageProps} from "react-native";
import {ColorsType} from "styled-components";
// eslint-disable-next-line quotes
import {NameIconTypes} from "../../constants/icons";

export interface IconOptionProps {
  icon: NameIconTypes;
  size: number;
  activeColor?: ColorsType;
}

export interface IconProps extends ImageProps, IconOptionProps {}
