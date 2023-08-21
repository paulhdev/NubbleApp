import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';
import {
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
  ForgetPasswordScreen,
} from '@screens';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    icon: Pick<IconProps, 'name' | 'color'>;
    title: string;
    description: string;
  };
  ForgetPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
