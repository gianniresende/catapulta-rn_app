/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller} from 'react-hook-form';
import Button from '~/components/Button';
import HeaderOptions from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';

import {Container, AccessText} from './styles';
import {schemaLogin} from './validation';
import BackButton from '~/components/BackButton';

const Login: React.FC = () => {
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /*
  * forms
  */

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm(
    {
      resolver: yupResolver(schemaLogin),
      defaultValues: {
        email: '',
        password: '',
      },
    }
  );


  /*
  * Callbacks
  */

  const handleGoBack = () => navigation.navigate('access');
  const onSubmit = async () => {
    await handleSubmit((email, password) => {
      console.log({email, password});
    })();
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOptions
        left={ <BackButton icon="closeX" onPress={handleGoBack} /> }
        right={
          <Text color="primary" typography="body1">
            Esqueci minha senha
          </Text>
        }
      />
      <Separator height={spacing.md} />
      <Text typography="h3">Login</Text>
      <Separator height={spacing.md} />
      <Controller
        control={control}
        name="email"
        render={({field: {onBlur, onChange, value, ref}}) => (
          <Input
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            onChangeText={text => setValue('email', text)}
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            label="Email"
            icon="checkCircle"
            iconColor="primary"
            error={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field: {onBlur, onChange, value, ref}}) => (
          <Input
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry
            onChangeText={text => setValue('password', text)}
            autoCapitalize="none"
            autoCompleteType="password"
            keyboardType="email-address"
            label="Senha"
            icon="checkCircle"
            iconColor="primary"
            error={errors.password?.message}
          />
        )}
      />
      <Separator height={spacing.md} />
      <Button onPress={onSubmit}>Login</Button>
      <Separator height={spacing.md} />
      <AccessText color="surface500" typography="body3">ou acesse login social</AccessText>
      <Separator height={spacing.md} />
      <Button typography="caption" icon={<Icon icon="apple" />} color="secondary" mode="outlined">Continuar com a Apple</Button>
      <Separator height={spacing.md} />
      <Button typography="caption" icon={<Icon icon="google" />} color="secondary" mode="outlined">Continuar com o Google</Button>
    </Container>
  );
};

export default Login;
