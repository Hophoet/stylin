import React from 'react';
import {TextInput, View, StyleSheet, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


const CTextInput = ({icon, textInputStyle, placeholder}:any) => {
	return(
		<View style={styles.container}>
			<View style={styles.textInputContainer}>
				{ icon &&
					<Icon size={30} name={icon} color='white' />
				}
				<TextInput
					placeholderTextColor='white'
					selectionColor='white'
					style={styles.textInput}
					placeholder={placeholder}
				/>
			</View>
		</View> 
	)

}
export default CTextInput;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
	},
	textInput:{
		color:'white',
		fontSize:14,
	},
	textInputContainer:{
		flexDirection:'row',
		alignItems:'center',
		borderBottomWidth:1,
		borderBottomColor:'white',
	}
	

})