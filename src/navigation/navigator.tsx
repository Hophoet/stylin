import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './auth.navigator';
import MainNavigator from './main.navigator'

const Stack = createStackNavigator();

export const Nav = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Main' component={MainNavigator}/>
    <Stack.Screen name='Auth' component={AuthNavigator}/>
  </Stack.Navigator>
);


const Navigator = (): React.ReactElement => (
    <NavigationContainer>
        <MainNavigator/>
    </NavigationContainer>
);

export default Navigator;

