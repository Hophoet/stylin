import React, {useEffect, useState} from 'react';
import {TextInput, Image, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { bgLinearGradient, sideBarLinearGradient} from '../assets/colors/main';



const SideBarIcon = ({item, activeMenu, setActiveMenu}:any) => {
	const isActiveMenu = () =>{
		return item == activeMenu;
		
	}
	return(
		<View 
			style={(isActiveMenu())
				?styles.activeContainer
				:styles.container}>
			<TouchableOpacity 
				onPress={()=>{
					setActiveMenu(item)
				}}
				style={(isActiveMenu())
					?styles.activateButtonContainer
					:styles.buttonContainer}>
				<Icon 
					name={item.icon} 
					size={30} 
					color={(isActiveMenu())
						?sideBarLinearGradient.top
						:'black' 
					}
				/>
			</TouchableOpacity>
		</View>
	)
}
export default SideBarIcon;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		padding:10,
		borderRadius:width/2,
	},
	activeContainer:{
		padding:10,
		borderRadius:width/2,

	},
	buttonContainer:{
		backgroundColor:'white',
		borderRadius:width/2,
		width:width/8,
		height:width/8,
		justifyContent:'center',
		alignItems:'center',
		elevation:10,
	},
	activateButtonContainer:{
		backgroundColor:'white',
		borderRadius:width/2,
		width:width/7,
		height:width/7,
		justifyContent:'center',
		alignItems:'center',
		elevation:10,

	}
})
