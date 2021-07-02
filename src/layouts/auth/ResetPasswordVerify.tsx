
import React from 'react';
import {ImageBackground, ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'

import CButton from '../../components/CButton';
import CTextInput from '../../components/CTextInput';

const ResetPasswordVerify = ({navigation}:any) => {
	const navigateToPasswordReset = ()=>{
		navigation.navigate('ResetPassword')
	}

	return(
		<View style={styles.container}>
				<ScrollView style={styles.scrollViewContainer}>
				<View style={styles.row1}>
					<Text style={styles.row1AppName}>Styl<Text style={styles.row1In}>In</Text></Text>
					<Text style={styles.row1Title}>Enter the code to verify your account</Text>
					<Text style={styles.row1Title2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt aspernatur quasi, molestiae consectetur earum rerum nobis unde aut nesciunt iure architecto</Text>
				</View>
				<View style={styles.row2}>
					<View style={styles.textInputsContainer}>
						<View style={styles.textInputContainer}>
							<CTextInput
								keyboardType='number-pad'
								autoFocus={true}
								iconColor='black'  
								placeholder='_ _ _ _ '
								selectionColor='black'
								placeholderTextColor='black'
								textInputStyle={{color:'black', fontSize:30}}
								textInputContainerStyle={{borderBottomColor:'black',justifyContent:'center'}}
		
							/>
						</View>
					</View>
					<View style={styles.formBottomContainer}>
						<TouchableOpacity 
							onPress={navigateToPasswordReset}	
						>
							<Text style={styles.footerLabel}>Don't receive the code, <Text style={styles.footerLabelRight}>send again?</Text></Text>
						</TouchableOpacity>
					</View>

				</View>
				</ScrollView>
		</View>
	)
}
export default ResetPasswordVerify;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white',
		paddingHorizontal:width/10,
		//backgroundColor:'#6C63FF'
	},
	scrollViewContainer:{
		flex:1,
	},
	row1AppName:{
		fontSize:50,
		color:'black',
	},
	row1Title:{
		fontSize:30,
		fontWeight:'bold',
		color:'black',
	},
	row1Title2:{
		fontSize:14,
		color:'black',
	},
	row1In:{
		color:'black',
		fontWeight:'bold',
	},
	row1Description:{
		color:'white',
		fontSize:14,
	},
	imageBackground:{
		flex:1,
		paddingHorizontal:width/10,
	},
	row1:{
		flex:2,
		// backgroundColor:'red',
		justifyContent:'center',
		marginTop:width/8,
		marginBottom:width/12,

	},
	row2:{
		flex:3,
		// backgroundColor:'blue',
	},
	textInputContainer:{
		paddingBottom:10,
	},
	
	button:{
		backgroundColor:'white',
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		padding:10,
		borderRadius:width/2,
		marginHorizontal:width/10,
	},
	formBottomContainer:{
		paddingVertical:10,
		flexDirection:'row',
		justifyContent:'center'
		
	},
	formBottomFirstLabel:{
		color:'black',	
	},
	formBottomFirstButton:{
		flexDirection:'row',
		alignItems:'center',
	},
	footerLabel:{
		color:'black',
	},
	footerLabelRight:{
		fontWeight:'bold',
		fontSize:15,
	}

})
