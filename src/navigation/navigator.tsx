import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './auth.navigator'

const Navigator = (): React.ReactElement => (
    <NavigationContainer>
        <AuthNavigator/>
    </NavigationContainer>
);

export default Navigator;

