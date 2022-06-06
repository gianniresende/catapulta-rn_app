/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StatusBar, useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';
import Button from '~/components/Button';
import HeaderOptions from '~/components/HeaderOptions';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import { Container } from './styles';
import {schemaSignUpStep2} from './validation';
import Bar from 'react-native-progress/Bar';
import BackButton from '~/components/BackButton';
import { useRoute } from '@react-navigation/native';
import useAuth from '~/hooks/useAuth';
import AvoidKeyboard from '~/components/AvoidKeyboard';

// import { Container } from './styles';

const SignUpStep2 = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {
    params: {email, firstName, lastName},
  } = useRoute<SignUpStep2SignInStackRouteProp>();
  const {width} = useWindowDimensions();

  /**
   * Hooks
   */
  const {signUp, loading} = useAuth();

  const {
    control,
    handleSubmit,
    setValue,
    setFocus,
    formState: {errors},
  // eslint-disable-next-line prettier/prettier
  } = useForm(
    {
      resolver: yupResolver(schemaSignUpStep2),
      defaultValues: {
        password: '',
        confirmPassword: '',
      },
    }
  );

  /*
  *Memos
  */

  const WithProgressBar = useMemo(() => {
    const pressableXWidth = 20;
    const marginScreenWidth = spacing.md * 2;
    const centerHeaderOptionWidth = spacing.md;
    const value = width - (marginScreenWidth + centerHeaderOptionWidth + pressableXWidth);
    return value;
  }, [width, spacing]);

  /*
  * Callbacks
  */

  const handleGoBack = () => navigation.goBack();
  const onSubmit = async () => {
    await handleSubmit(async ({password}) => {
      await signUp({email, firstName, lastName, password});
    })();
  };

  return (
    <AvoidKeyboard>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor={'transparent'}
          />
          <HeaderOptions
            left={ <BackButton icon="back" onPress={handleGoBack} /> }
            center={<Separator width={spacing.md} />}
            right={
              <Bar
              progress={1}
              colors={colors.primary.main}
              unfilledColor={colors.surface50.main}
              borderWidth={0}
              height={6}
              width={WithProgressBar}
            />}
          />
          <Separator height={spacing.md} />
          <Text typography="h3">Cadastro</Text>
          <Separator height={spacing.md} />
          <Text color="surface100" typography="caption">
            { 'Sua senha precisa ter \n8 caracteres'}
          </Text>
          <Separator height={spacing.md} />
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
                label="Senha"
                icon="checkCircle"
                iconColor="primary"
                error={errors.password?.message}
                returnKeyType="next"
                onSubmitEditing={() => {
                  setFocus('confirmPassword');
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({field: {onBlur, onChange, value, ref}}) => (
              <Input
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry
                onChangeText={text => setValue('confirmPassword', text)}
                autoCapitalize="none"
                autoCompleteType="password"
                label="Confirmar Senha"
                iconColor="primary"
                error={errors.confirmPassword?.message}
                returnKeyType="done"
                onSubmitEditing={onSubmit}
              />
            )}
          />
          <Separator height={spacing.md} />
          <Button loading={loading} disabled={loading} onPress={onSubmit}>Finalizar</Button>
          <Separator height={spacing.md} />
        </Container>
      </ScrollView>
    </AvoidKeyboard>
  );
};

export default SignUpStep2;
