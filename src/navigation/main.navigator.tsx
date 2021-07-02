<<<<<<< HEAD
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
=======
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthNavigator} from './auth.navigator';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

 function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const Nav = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Auth' component={AuthNavigator}/>
    <Stack.Screen name='App' component={App}/>
  </Stack.Navigator>
)
export default Nav;
>>>>>>> c107f8baefd2880f9a85bc48e71312e5a77633db
