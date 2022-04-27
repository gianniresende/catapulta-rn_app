import * as yup from 'yup';

export const schemaSignUpStep2 = yup.object({
  password: yup
    .string()
    .required('Campo obrigatório')
    .min(8, 'Pelo menos oito caracteres'),
  confirmPassword: yup
    .string()
    .required('Campo obrigatório')
    .min(8, 'Pelo menos oito caracteres')
    .oneOf([yup.ref('password')], 'Senhas diferentes'),
});
