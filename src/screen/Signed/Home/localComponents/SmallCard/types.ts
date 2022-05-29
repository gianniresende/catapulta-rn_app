/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {NameIconTypes} from "~/constants/icons";

export interface Props {
  title: String;
  icon: NameIconTypes;
  onPress?: () => void;
}
