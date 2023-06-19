import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';

import { Text } from './src/components/Text/Text';
import { theme } from './src/assets/theme/theme';
import { Button } from './src/components/Button/Button';

function App(): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ paddingHorizontal: 24 }}>

        <Text italic preset="headingLarge" marginBottom="s16">Nubble App</Text>

        <Button title="Primary" preset="primary" marginBottom="s12" />
        <Button disabled title="Primary" preset="primary" marginBottom="s12" />
        <Button title="Outline" preset="outline" marginBottom="s12" />

        <Button title="Loading" loading marginBottom="s12" />
        <Button disabled title="Loading" loading marginBottom="s12" />
        <Button disabled preset="outline" title="Loading" loading marginBottom="s12" />

      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
