/* eslint-disable @typescript-eslint/no-unused-vars */
import {RequestCreateUserData, ResponseCreateUserData} from './types';
import api from '~/services/api';

export const createUserResource = async (
  createUser: RequestCreateUserData,
): Promise<ResponseCreateUserData> => {
  const {data} = await api.post<ResponseCreateUserData>('/user', createUser);
  return data;
};
