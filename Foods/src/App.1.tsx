import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Home } from './src/Home';
import { Details } from './src/Details';
import { Stack } from './App';

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Details} />
        <Stack.Screen name='Details' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
