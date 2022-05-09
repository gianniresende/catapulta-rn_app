/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {UserDTO} from "~/@types/dtos/user";

export interface RequestSignInData {
  email: string;
  password: string;
}

export interface ResponseSignInData {
  user: UserDTO;
}
