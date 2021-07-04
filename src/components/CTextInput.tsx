import React from 'react';
import {TextInput, View, StyleSheet, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";


const CTextInput = ({icon, label, onChangeText, keyboardType, autoFocus, placeholderTextColor, selectionColor, iconColor, textInputStyle, textInputContainerStyle, placeholder}:any) => {
	return(
		<View style={styles.container}>
			<View style={[styles.textInputContainer, textInputContainerStyle]}>
				{ icon &&
					<Icon size={30} name={icon} color={(iconColor)?iconColor:'white'}/>

				}
				<TextInput
					keyboardType={(keyboardType)?keyboardType:'default'}
					autoFocus={autoFocus}
					placeholderTextColor={(placeholderTextColor)?placeholderTextColor:'white'}
					selectionColor={(selectionColor)?selectionColor:'white'}
					style={[styles.textInput, textInputStyle]}
					placeholder={placeholder}
					onChangeText={(text)=>onChangeText(text)}
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