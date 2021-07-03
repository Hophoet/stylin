import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


const CIconButton = ({label, onPress, iconSize, buttonSize, buttonStyle, icon, textStyle, iconColor}:any) => {
	return(
		<TouchableOpacity 
            onPress={onPress}
            style={[styles.container, buttonStyle]}>
				{ icon &&
            		<Icon name={icon} size={(iconSize)?iconSize:30} color={(iconColor)?iconColor:'black'} />
				}
		</TouchableOpacity>
	)

}
export default CIconButton;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
		backgroundColor:'white',
		borderRadius:width/2,
		justifyContent:'center',
		alignItems:'center',
	},
	buttonLabel:{
		fontWeight:'bold',
        color:'black',
		margin:5,
		fontSize:17,
	}

})