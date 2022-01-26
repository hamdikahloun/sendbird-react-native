import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './utils';
import MainNavigator from './MainNavigator';
import {LoginContainer} from '@/containers';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '@/store/user';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginContainer} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
