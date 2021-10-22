/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line prettier/prettier
import {ColorSchemeName} from "react-native";
// eslint-disable-next-line prettier/prettier
import {DefaultTheme} from "styled-components";

export type themeType = 'dark' | 'light';
export interface Props {
  currentTheme: themeType;
  theme: DefaultTheme;
}

export interface colorSchemeProps {
  colorScheme: ColorSchemeName;
}
