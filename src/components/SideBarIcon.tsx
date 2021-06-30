import React, {useEffect, useState} from 'react';
import {TextInput, Image, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";



const SideBar = ({item}:any) => {

	console.log(item)
	return(
		<TouchableOpacity style={styles.container}>
			<Icon name={item.icon} size={30} color='gray' />
		</TouchableOpacity>
	)
}
export default SideBar;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
		borderRadius:width/2,
		width:width/8,
		height:width/8,
		justifyContent:'center',
		alignItems:'center',
	},
})
