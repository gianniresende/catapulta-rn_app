/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';
import Button from '~/components/Button';
import HeaderOptions from '~/components/HeaderOptions';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import { Container } from './styles';
import {schemaSignUp} from './validation';
import Bar from 'react-native-progress/Bar';
import BackButton from '~/components/BackButton';

// import { Container } from './styles';

const SignUp = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {width} = useWindowDimensions();

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  // eslint-disable-next-line prettier/prettier
  } = useForm(
    {
      resolver: yupResolver(schemaSignUp),
      defaultValues: {
        email: '',
        firstName: '',
        lastName: '',
      },
    }
  );

  /*
  *Memos
  */

  const WithProgressBar = useMemo(() => {
    const pressableXWidth = 35;
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
    await handleSubmit(({email, firstName, lastName}) => {
      console.log({email, firstName, lastName});
    })();
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOptions
        left={ <BackButton icon="closeX" onPress={handleGoBack} /> }
        center={<Separator width={spacing.md} />}
        right={
          <Bar
          progress={0.5}
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
      <Text color="surface100" typography="caption">Informações pessoais</Text>
      <Separator height={spacing.md} />
      <Controller
        control={control}
        name="firstName"
        render={({field: {onBlur, onChange, value, ref}}) => (
          <Input
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            onChangeText={text => setValue('firstName', text)}
            label="Nome"
            error={errors.firstName?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({field: {onBlur, onChange, value, ref}}) => (
          <Input
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          onChangeText={text => setValue('lastName', text)}
          label="Sobre Nome"
          error={errors.lastName?.message}
          />
        )}
      />
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
      <Separator height={spacing.md} />
      <Button onPress={onSubmit}>Cadastrar</Button>
      <Separator height={spacing.md} />
    </Container>
  );
};

export default SignUp;
