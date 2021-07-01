import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import Icon from "react-native-vector-icons/Ionicons";
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import { bgLinearGradient} from '../../assets/colors/main';
import SideBar from '../../components/SideBar';
import Home from './Home';

const icons = [
    {id:1, icon:'home'},
    {id:2, icon:'settings'},
    {id:3, icon:'heart'},
    {id:4, icon:'card'},
    {id:5, icon:'scan'},
]


const Main = ({navigation}:any) => {
  const [activeMenu, setActiveMenu] = useState(icons[0]);
  const [value, setValue] = useState("");
  const [sideBarVisible, toggleSideBar] = useState(false);

  return (
      <View style={styles.container}>
        <StatusBar backgroundColor={bgLinearGradient.top} barStyle="dark-content" />
		{ sideBarVisible && 
			<View style={[styles.sideBarContainer]}>
				<SideBar
					activeMenu={activeMenu}
					setActiveMenu={setActiveMenu}
					menus={icons}
					sideBarVisible={sideBarVisible}	
					toggleSideBar={toggleSideBar}	
				/>
			</View>
		}
		<View style={styles.contentContainer}>
			  <LinearGradient 
          		colors={[bgLinearGradient.top, bgLinearGradient.center]} 
          		style={styles.linearGradient}>
					  <View style={styles.header}>
						  	<View style={[styles.headerColumn, styles.headerColumn1]}>
							{ !sideBarVisible && 
								<TouchableOpacity
									onPress={()=>toggleSideBar(!sideBarVisible)}
								>
									<Icon name='list' size={30} color='white'/>
								</TouchableOpacity>
							}
						  </View>
						  <View style={[styles.headerColumn, styles.headerColumn2]}>
							  <Text style={styles.title}>cashchap</Text>
						  </View>
					  </View>
					  <View 
					  	style={styles.screenContainer}
						>
							<ScrollView>
								<Home/>
							</ScrollView>
							  
						</View>
			
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
	title:{
		color:'white',
		fontSize:20,
	},
  	header:{
		flexDirection:'row',
		height:width/8,
		// backgroundColor:'red',

  	},
	headerColumn:{
		flex:1,
		justifyContent:'center',
	},
	headerColumn1:{
		alignItems:'flex-start',
		paddingLeft:width/12,
	},
	headerColumn2:{
		alignItems:'flex-end',
		paddingRight:width/12,
	},
	screenContainer:{
		flex:1,
		paddingLeft:width/12,
	}


})
