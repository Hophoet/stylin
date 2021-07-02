import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../layouts/main/Main'
import Transfer from '../layouts/main/Transfer';

const Stack = createStackNavigator();

export const MainNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Main' component={Main}/>
    <Stack.Screen name='Transfer' component={Transfer}/>
  </Stack.Navigator>
);
