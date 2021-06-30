import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Presentation from '../layouts/presentation/Presentation';
import Register from '../layouts/auth/Register';
import Test from '../layouts/auth/Test';
import CodeVerification from '../layouts/auth/CodeVerification';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Presentation' component={Presentation}/>
    <Stack.Screen name='Register' component={Register}/>
    <Stack.Screen name='CodeVerification' component={CodeVerification}/>
  </Stack.Navigator>
);
