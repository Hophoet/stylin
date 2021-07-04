import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


const ActionButton = ({item, onPress, navigate, buttonStyle, icon, textStyle, iconColor}:any) => {
	return(
		<TouchableOpacity 
            onPress={()=>{
				if(item.code == 'upi'){
					navigate('UpdatePersonalInformations')
				}
				else if(item.code == 'mo'){
					navigate('Orders');
				}
			}}
            style={[styles.container, buttonStyle]}>
            <Text style={[styles.buttonLabel, textStyle]}>{item.name}</Text>
            { icon &&
                <Icon name={icon} size={30} color={(iconColor)?iconColor:'black'} />
            }
		</TouchableOpacity>
	)
}
export default ActionButton;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
		flexDirection:'row',
		justifyContent:'space-between',
		padding:10,
		borderRadius:5,
		margin:5,
		minHeight:50,
		elevation:5,
	},
	buttonLabel:{
		fontWeight:'bold',
        color:'black',
		margin:5,
		fontSize:17,
	}

})