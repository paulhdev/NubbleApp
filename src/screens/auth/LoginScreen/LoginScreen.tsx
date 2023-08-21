import React from 'react';
import { useForm } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { RootStackParamList } from '../../../routes/Routes';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from './loginSchema';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {

  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgetPassword() {
    navigation.navigate('ForgetPasswordScreen');
  }

  function submitForm({ email, password }: LoginSchema) {
  }

  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">Olá</Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>


      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        autoCapitalize="none"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's10' }}
      />

      <Text mt="s10" color="primary" preset="paragraphSmall" bold onPress={navigateToForgetPassword}>Esqueci minha senha</Text>

      <Button mt="s48" title="Entrar" disabled={!formState.isValid} onPress={handleSubmit(submitForm)} />
      <Button onPress={navigateToSignUpScreen} mt="s12" title="Criar uma conta" preset="outline" />
    </Screen>
  );
}
