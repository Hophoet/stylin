import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


const OrderItem = ({item, onPress, navigate, buttonStyle, icon, textStyle, iconColor}:any) => {
	return(
		<View 
            style={[styles.container, buttonStyle]}>
            { icon &&
                <Icon name={icon} size={30} color={(iconColor)?iconColor:'black'} />
            }
            <Text style={[styles.buttonLabel, textStyle]}>{item.quantity} x ${item.price}</Text>
            <Text style={[styles.buttonLabel, textStyle]}>{item.date}</Text>
            <Text style={[styles.buttonLabel, textStyle]}></Text>
		</View>
	)
}
export default OrderItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
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