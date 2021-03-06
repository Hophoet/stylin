import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import {AuthNavigator} from './auth.navigator';
import Home from '../layouts/main/Home'
import ProductDetail from '../layouts/main/ProductDetail'
import Cart from '../layouts/main/Cart';
import Shipping from '../layouts/main/Shipping';
import Payment from '../layouts/main/Payment';
import DoneOrder from '../layouts/main/DoneOrder';
import Favorite from '../layouts/main/Favorite';
import Profile from '../layouts/main/Profile';
import UpdatePersonalInformations from '../layouts/main/UpdatePersonalInformations';
import Orders from '../layouts/main/Orders';


const Stack = createStackNavigator();

const ProfileNav = (): React.ReactElement => (
  <Stack.Navigator 
    // headerMode='none'
    >
    <Stack.Screen 
			options={{
				headerShown:false,
			}}
      name='Profile' 
      component={Profile}/>
    <Stack.Screen 
			options={{
				// headerShown:false,
			}}
      name='UpdatePersonalInformations' 
      component={UpdatePersonalInformations}/>
    <Stack.Screen 
			options={{
				// headerShown:false,
			}}
      name='Orders' 
      component={Orders}/>
  </Stack.Navigator>
)

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
        component={Favorite}
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
			name="Cart" 
			component={Cart}
		   	
			options = {{
				tabBarIcon: ({color, size, focused}) => {
					let iconName = (focused)?'md-cart':'md-cart-outline';
					let iconSize = (focused)?35:30; 
					let iconColor = (focused)?'black':'gray';
					return (<Icon name={iconName} color={iconColor} size={iconSize} />);
				},
        tabBarBadge:'4'
			}}
		 />
		<Tab.Screen
			name="Profile" 
			component={ProfileNav}
			
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


const Nav = (): React.ReactElement => (
  <Stack.Navigator 
    // headerMode='none'
    >
    <Stack.Screen 
			options={{
				headerShown:false,
			}}
      name='Auth' 
      component={AuthNavigator}/>
    <Stack.Screen 
			options={{
				headerShown:false,
			}}
      name='App' 
      component={App}/>
    <Stack.Screen 
      name='ProductDetail' 
      component={ProductDetail}/>
    <Stack.Screen 
      name='Shipping' 
      component={Shipping}/>
    <Stack.Screen 
      name='Payment' 
      component={Payment}/>
    <Stack.Screen 
      name='DoneOrder' 
      component={DoneOrder}/>
  </Stack.Navigator>
)
export default Nav;
