import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';

import { zodResolver } from '@hookform/resolvers/zod';

import { ForgetPasswordSchema, forgetPasswordSchema } from './forgetPasswordSchema';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/Form/FormTextInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgetPasswordScreen'>

export function ForgetPasswordScreen({ navigation }: ScreenProps) {

  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<ForgetPasswordSchema>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description: 'Clique no link enviado ao seu e-mail para recuperar sua senha',
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
      <Text preset="headingLarge" mb="s16">Esqueci minha senha</Text>
      <Text preset="paragraphLarge" mb="s32">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail" placeholder="Digite seu e-mail" boxProps={{ mb: 's40' }}
      />

      <Button disabled={!formState.isValid} onPress={handleSubmit(submitForm)} title="Recuperar senha" />
    </Screen>
  );
}
