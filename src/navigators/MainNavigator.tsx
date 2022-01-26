import React from 'react';
import {ChannelContainer} from '@/containers';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OpenChannelContainer" component={ChannelContainer} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
