/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {NameIconTypes} from "~/constants/icons";

export interface OptionsProps {
  title: string;
  icon: NameIconTypes;
  onPress?: () => void;
}
