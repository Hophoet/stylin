import React from 'react';
import { StatusBar} from 'react-native'

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import Navigator from './src/navigation/navigator'

const App = () => {
	return (
		<>
			<StatusBar 
				backgroundColor={'white'} 
				barStyle="dark-content"
				/>
			<Navigator/>
		</>
   );
 };


 export default App;
