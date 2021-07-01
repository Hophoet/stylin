
import React from 'react';
import {ImageBackground, ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'

import CButton from '../../components/CButton';
import CTextInput from '../../components/CTextInput';

const ResetPassword = ({navigation}:any) => {
	const navigateBack = ()=>{
		navigation.goBack()
	}

	return(
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/bg3.jpg')}
				style={styles.imageBackground}
				blurRadius={2}
				resizeMode='cover'
			>
				<ScrollView style={styles.scrollViewContainer}>
				<View style={styles.row1}>
					<Text style={styles.row1AppName}>Styl<Text style={styles.row1In}>In</Text></Text>
					<Text style={styles.row1Title}>Reset your account</Text>
					<Text style={styles.row1Title2}>Enter your email to continue</Text>
				</View>
				<View style={styles.row2}>
					<View style={styles.textInputsContainer}>
						<View style={styles.textInputContainer}>
							<CTextInput
								icon='mail'	
								placeholder='Email'
							/>
						</View>
					</View>
					<View style={styles.formBottomContainer}>
					</View>
					<CButton 
						iconPosition='right'
						label='Continue'
					/>
					<TouchableOpacity 
						onPress={navigateBack}	
					>
						<Text style={styles.footerLabel}><Text style={styles.footerLabelRight}>Go Back</Text></Text>
					</TouchableOpacity>

				</View>
				</ScrollView>
			</ImageBackground>
		</View>
	)

}
export default ResetPassword;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
		//backgroundColor:'#6C63FF'
	},
	scrollViewContainer:{
		flex:1,
	},
	row1AppName:{
		fontSize:50,
		color:'white',
		fontWeight:'bold',
	},
	row1Title:{
		fontSize:30,
		color:'white',
	},
	row1Title2:{
		fontSize:20,
		color:'white',
	},
	row1In:{
		color:'white',
		fontWeight:'bold',
	},
	row1Description:{
		color:'white',
		fontSize:22,
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
		justifyContent:'space-between'
		
	},
	formBottomFirstLabel:{
		color:'white',	
	},
	formBottomFirstButton:{
		flexDirection:'row',
		alignItems:'center',
	},
	footerLabel:{
		color:'white',
	},
	footerLabelRight:{
		fontWeight:'bold',
		fontSize:15,
	}

})
