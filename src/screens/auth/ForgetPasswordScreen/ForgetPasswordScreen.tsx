import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {Screen, Text, Button, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {RootStackParamList} from '@routes';

import {
  ForgetPasswordSchema,
  forgetPasswordSchema,
} from './forgetPasswordSchema';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgetPasswordScreen'
>;

export function ForgetPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<ForgetPasswordSchema>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado ao seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });

    // navigation.navigate('SuccessScreen', {
    //   title: 'Enviamos as instruções para seu e-mail',
    //   description: 'Clique no link enviado ao seu e-mail para recuperar sua senha',
    //   icon: {
    //     name: 'messageRound',
    //     color: 'primary',
    //   },
    // });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
