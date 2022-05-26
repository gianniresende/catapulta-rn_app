/* eslint-disable @typescript-eslint/no-unused-vars */
import {RequestSignInData, ResponseSignInData} from './types';
import api from '~/services/api';

export const signInResource = async ({
  email,
  password,
}: RequestSignInData): Promise<ResponseSignInData> => {
  const {data} = await api.post<ResponseSignInData>('/auth', {email, password});
  return data;
};
