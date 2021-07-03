import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import {AuthNavigator} from './auth.navigator';
import Home from '../layouts/main/Home'


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
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor:'black',
        inactiveTintColor:'gray',
        activeBackgroundColor:'white',
        inactiveBackgroundColor:'white',
        showLabel:false,
      }}
    >
      <Tab.Screen
        name="Home" 
        component={Home}
        options = {{
          tabBarLabel:'Home',
          tabBarIcon: ({color, size, focused}) => {
            let iconName = (focused)?'search':'search-outline';
            let iconSize = (focused)?35:30; 
            let iconColor = (focused)?'black':'gray';
            return (<Icon name={iconName} color={iconColor} size={iconSize} />);
          },
          
        }}
      
      />
      <Tab.Screen
        name="Favorite" 
        component={HomeScreen}
        options = {{
          tabBarLabel:'Favorite',
          tabBarIcon: ({color, size, focused}) => {
            let iconName = (focused)?'heart':'heart-outline';
            let iconSize = (focused)?35:30; 
            let iconColor = (focused)?'black':'gray';
            return (<Icon name={iconName} color={iconColor} size={iconSize} />);
          },
          
        }}
      
      />
		<Tab.Screen 
			name="Scanner" 
			component={HomeScreen}
		   	
			options = {{
				tabBarIcon: ({color, size, focused}) => {
					let iconName = (focused)?'md-cart':'md-cart-outline';
					let iconSize = (focused)?35:30; 
					let iconColor = (focused)?'black':'gray';
					return (<Icon name={iconName} color={iconColor} size={iconSize} />);
				},
			}}
		 />
		<Tab.Screen
			name="Profile" 
			component={HomeScreen}
			
			options = {{
				tabBarLabel:'Profile',
				tabBarIcon: ({color, size, focused}) => {
					let iconName = (focused)?'person':'person-outline';
					let iconSize = (focused)?35:30; 
					let iconColor = (focused)?'black':'gray';
					return (<Icon name={iconName} color={iconColor} size={iconSize} />);
				}

			}}
		 />
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
