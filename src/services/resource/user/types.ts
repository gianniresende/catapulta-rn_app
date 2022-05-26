/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {UserDTO} from "~/@types/dtos/user";

export interface RequestCreateUserData {
  email: string;
  password: string;
  firstName: String;
  lastName: String;
}

export interface ResponseCreateUserData {
  user: UserDTO;
}
