/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
import {yupResolver} from '@hookform/resolvers/yup';
import React, { useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StatusBar, useWindowDimensions } from 'react-native';
import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import HeaderOptions from '~/components/HeaderOptions';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import {Container} from './styles';
import {schemaSignUp} from './validation';
import ProgressBar from 'react-native-progress/Bar';
import BackButton from '~/components/BackButton';
import AvoidKeyboard from '~/components/AvoidKeyboard';

// import { Container } from './styles';

const SignUp = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {width} = useWindowDimensions();

  const {
    control,
    handleSubmit,
    setValue,
    setFocus,
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
    await handleSubmit(({email, firstName, lastName}) => {
      console.log({email, firstName, lastName});
      navigation.navigate('SignUpStep2', {
        email,
        firstName,
        lastName,
      });
    })();
  };

  return (
    <AvoidKeyboard>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor={'transparent'}
          />
          <HeaderOptions
            left={ <BackButton icon="back" onPress={handleGoBack} /> }
            center={<Separator />}
            right={
              <ProgressBar
              progress={0.5}
              colors={colors.primary.main}
              unfilledColor={colors.surface50.main}
              borderWidth={0}
              height={10}
              width={WithProgressBar}
            />}
          />
          <Separator height={spacing.sm} />
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
                returnKeyType="next"
                onSubmitEditing={() => {
                  setFocus('lastName');
                }}
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
              returnKeyType="next"
              onSubmitEditing={() => {
                setFocus('email');
              }}
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
                returnKeyType="done"
                onSubmitEditing={onSubmit}
              />
            )}
          />
          <Separator height={spacing.lg} />
          <Button onPress={onSubmit}>Cadastrar</Button>
          <Separator height={spacing.md} />
        </ScrollView>
      </Container>
    </AvoidKeyboard>
  );
};

export default SignUp;
