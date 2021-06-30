import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import { bgLinearGradient} from '../../assets/colors/main';
import SideBar from '../../components/SideBar';


const Main = ({navigation}:any) => {

  const [value, setValue] = useState("");
  return (
      <View style={styles.container}>
        <StatusBar backgroundColor={bgLinearGradient.top} barStyle="dark-content" />
		<View style={styles.sideBarContainer}>
        	<SideBar/>
		</View>
		<View style={styles.contentContainer}>
			  <LinearGradient 
          		colors={[bgLinearGradient.top, bgLinearGradient.bottom]} 
          		style={styles.linearGradient}>
			
            	<Text>APP MAIN SCREEN</Text>
			</LinearGradient>
		</View>
      </View>
  );

}
export default Main;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
		backgroundColor:'red',

	},
	sideBarContainer:{
		flex:1,
		backgroundColor:'aqua',
	},
	contentContainer:{
		flex:4,
		backgroundColor:'blue',
	},
  	linearGradient:{
		  flex:1,

  },
})
