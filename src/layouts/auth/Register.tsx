import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'


const Register = () => {

	return(
		<View style={styles.container}>
            <Text>REGISTER SCREEN</Text>
		</View>
	)

}
export default Register;

const styles = StyleSheet.create({
	container:{
		flex:1,
        justifyContent:'center',
        alignItems:'center'
		//backgroundColor:'#6C63FF'
	},
})
