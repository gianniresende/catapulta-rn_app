/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line quotes
// eslint-disable-next-line prettier/prettier
import {DefaultTheme} from "styled-components";
import * as Colors from '../colors';
// eslint-disable-next-line prettier/prettier
import { borders, spacing, typographyCommon } from "./common";

export const themeLight: DefaultTheme = {
  colors: {
    primary: {
      main: Colors.brand01,
      onMain: Colors.white,
    },
    secondary: {
      main: Colors.brand02,
      onMain: Colors.white,
    },
    error: {
      main: Colors.red,
      onMain: Colors.white,
    },
    background: {
      main: Colors.white,
      onMain: Colors.black,
    },
    surface: {
      main: Colors.neutrais,
      onMain: Colors.white,
    },
    surface50: {
      main: Colors.gray50,
      onMain: Colors.white,
    },
    surface100: {
      main: Colors.gray100,
      onMain: Colors.white,
    },
    surface500: {
      main: Colors.gray500,
      onMain: Colors.white,
    },
    surface600: {
      main: Colors.gray600,
      onMain: Colors.white,
    },
    orange: {
      main: Colors.orange,
      onMain: Colors.white,
    },
    lightGreen: {
      main: Colors.lightgreen,
      onMain: Colors.white,
    },
  },
  typography: typographyCommon,
  borders,
  spacing,
};
