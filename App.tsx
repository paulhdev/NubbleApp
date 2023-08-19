import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';

import { Text } from './src/components/Text/Text';
import { theme } from './src/assets/theme/theme';
import { Button } from './src/components/Button/Button';
import { TextInput } from './src/components/TextInput/TextInput';
import { Icon } from './src/components/Icon/Icon';

function App(): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ paddingHorizontal: 24 }}>

        <Text mb="s8" preset="headingLarge">Olá</Text>
        <Text mb="s40" preset="paragraphLarge">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput label="E-mail" placeholder="Digite seu e-mail" boxProps={{ mb: 's20' }} />

        <TextInput label="Senha" placeholder="Digite sua senha" RightComponent={<Icon name="eyeOn" color="gray2" />} boxProps={{ mb: 's10' }} />

        <Text mt="s10" color="primary" preset="paragraphSmall" bold>Esqueci minha senha</Text>

        <Button mt="s48" title="Entrar" />
        <Button mt="s12" title="Criar uma conta" preset="outline" />

      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
