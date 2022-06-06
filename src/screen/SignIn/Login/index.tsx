/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
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
import useAuth from '~/hooks/useAuth';
import AvoidKeyboard from '~/components/AvoidKeyboard';

const Login: React.FC = () => {
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  const {loading, signIn} = useAuth();

  /*
  * forms
  */

  const {
    control,
    handleSubmit,
    setValue,
    setFocus,
    formState: {errors},
  } = useForm(
    {
      resolver: yupResolver(schemaLogin),
      defaultValues: {
        email: __DEV__ ? 'gianniresende@gmail.com' : '',
        password: __DEV__ ? '698dc19d489c4e4db73e28a713eab07b' : '',
      },
    }
  );

  const handleGoodleButton = async () => {
    try {
      const {user} = await GoogleSignin.signIn();
      console.log(user);
    } catch (error) {
      //console.error(error);
    }
  };


  /*
  * Callbacks
  */

  const handleGoBack = () => navigation.navigate('access');

  const onSubmit = async () => {
    await handleSubmit(async ({email, password}) => {
      await signIn({email, password});
    })();
  };

  return (
    <AvoidKeyboard>
      <Container>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor={'transparent'}
        />
        <HeaderOptions
          left={ <BackButton icon="back" onPress={handleGoBack} /> }
          right={
            <Text color="primary" typography="caption">
              Esqueci minha senha
            </Text>
          }
        />
        <Separator height={spacing.md} />
        <ScrollView showsVerticalScrollIndicator={false}>
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
                returnKeyType="next"
                onSubmitEditing={() => setFocus('password')}
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
                returnKeyType="done"
                onSubmitEditing={onSubmit}
              />
            )}
          />
          <Separator height={spacing.md} />
          <Button loading={loading} disabled={loading} onPress={onSubmit}>Login</Button>
          <Separator height={spacing.md} />
          <AccessText color="surface500" typography="body3">ou acesse login social</AccessText>
          <Separator height={spacing.md} />
          <Button typography="caption" icon={<Icon icon="apple" />} color="secondary" mode="outlined">Continuar com a Apple</Button>
          <Separator height={spacing.md} />
          <Button
            onPress={handleGoodleButton}
            typography="caption"
            icon={<Icon icon="google" />}
            color="secondary"
            mode="outlined">Continuar com o Google
          </Button>
        </ScrollView>
      </Container>
    </AvoidKeyboard>
  );
};

export default Login;
