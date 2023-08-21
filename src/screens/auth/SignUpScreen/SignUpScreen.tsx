import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';
import { zodResolver } from '@hookform/resolvers/zod';

import { SignUpSchema, signUpSchema } from './signUpSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function SignUpScreen({ navigation }: ScreenProps) {

  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm() {

    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });

    // navigation.navigate('SuccessScreen', {
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">Criar uma conta</Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username" placeholder="@" boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        autoCapitalize="words"
        label="Nome completo" placeholder="Digite seu nome completo" boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail" placeholder="Digite seu e-mail" boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha" placeholder="Digite sua senha" boxProps={{ mb: 's48' }}
      />

      <Button disabled={!formState.isValid} onPress={handleSubmit(submitForm)} title="Criar uma conta" />

    </Screen>
  );

}
