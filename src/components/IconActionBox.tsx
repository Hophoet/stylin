import React, {useEffect, useState} from 'react';
import {TextInput, Image, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { bgLinearGradient, sideBarLinearGradient} from '../assets/colors/main';



const IconActionBox = ({icon, title}:any) => {
	return(
		<View 
			style={styles.container}
		>
			<TouchableOpacity 
				style={styles.buttonContainer}
				onPress={()=>{
				}}
				>
				<Icon 
					name={icon} 
					size={30} 
					color={bgLinearGradient.top}
				/>
				<Text style={styles.label}>{title}</Text>
			</TouchableOpacity>
		</View>
	)
}
export default IconActionBox;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		padding:10,
		borderRadius:width/2,
	},
	buttonContainer:{
		backgroundColor:'white',
		borderRadius:5,
		justifyContent:'center',
		alignItems:'center',
		elevation:10,
		padding:15,
		minWidth:width/4,
		minHeight:width/5,
	},
	activateButtonContainer:{
		backgroundColor:'white',
		borderRadius:width/2,
		width:width/7,
		height:width/7,
		justifyContent:'center',
		alignItems:'center',
		elevation:10,
	},
	label:{

	}
})
