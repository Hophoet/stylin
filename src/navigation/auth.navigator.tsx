import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Presentation1 from '../layouts/presentation/Presentation1';
import Presentation2 from '../layouts/presentation/Presentation2';
import Splash from '../layouts/splash/Splash';
import SignIn from '../layouts/auth/SignIn';
import SignUp from '../layouts/auth/SignUp';
import ResetPassword from '../layouts/auth/ResetPassword';
import ResetPasswordVerify from '../layouts/auth/ResetPasswordVerify';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Splash' component={Splash}/>
    <Stack.Screen name='Presentation1' component={Presentation1}/>
    <Stack.Screen name='Presentation2' component={Presentation2}/>
    <Stack.Screen name='SignIn' component={SignIn}/>
    <Stack.Screen name='SignUp' component={SignUp}/>
    <Stack.Screen name='ResetPassword' component={ResetPassword}/>
    <Stack.Screen name='ResetPasswordVerify' component={ResetPasswordVerify}/>
  </Stack.Navigator>
);
