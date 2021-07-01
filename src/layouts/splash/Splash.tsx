
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native'


const Splash = ({navigation}:any) => {
	useEffect(()=> {
		setTimeout(()=>{
			navigation.navigate('Presentation1');
		}, 3000)

	}, [])


	return(
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Text style={styles.label}>Styl<Text style={styles.in}>In</Text></Text>
			</View>
		</View>
	)

}
export default Splash;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	contentContainer:{
		// backgroundColor:'red',	
		height:height/2,
		justifyContent:'flex-end',
		alignItems:'center',
	},
	label:{
		alignSelf:'center',
		fontSize:50,
		textAlign:'center',
	},
	in:{
		fontWeight:'bold',
	}


})
