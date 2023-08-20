import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgetPassword() {
    navigation.navigate('ForgetPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">Olá</Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput label="E-mail" placeholder="Digite seu e-mail" boxProps={{ mb: 's20' }} />

      <PasswordInput label="Senha" placeholder="Digite sua senha" boxProps={{ mb: 's10' }} />

      <Text mt="s10" color="primary" preset="paragraphSmall" bold onPress={navigateToForgetPassword}>Esqueci minha senha</Text>

      <Button mt="s48" title="Entrar" />
      <Button onPress={navigateToSignUpScreen} mt="s12" title="Criar uma conta" preset="outline" />
    </Screen>
  );
}
