
import React from 'react';
import {ImageBackground, Text, View, StyleSheet, Dimensions} from 'react-native'

import CButton from '../../components/CButton';

const Presentation = ({navigation}:any) => {
	const navigateTo = (screen:string, data:any={}) => {
		navigation.navigate(screen, data);
	}

	const navigateNext = ()=>{
		navigation.navigate('Presentation2')
	}

	return(
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/bg3.jpg')}
				style={styles.imageBackground}
				blurRadius={2}
				resizeMode='cover'
			
			>
				<View style={styles.row1}>
					<Text style={styles.row1Title}>Styl<Text style={styles.row1In}>In</Text></Text>
					<Text style={styles.row1Description}>
						Expore the new
					</Text>
					<Text style={styles.row1Description}>
						world of Clothing
					</Text>
				</View>
				<View style={styles.row2}>
					<CButton 
						onPress={navigateNext}
						iconPosition='right'
						icon='arrow-forward' 
						label='Sign In With E-mail'
					/>
				</View>
			</ImageBackground>
		</View>
	)

}
export default Presentation;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
		//backgroundColor:'#6C63FF'
	},
	row1Title:{
		fontSize:50,
		color:'white',
		fontWeight:'bold',
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
		flex:3,
		//backgroundColor:'red',
		justifyContent:'center',
		paddingHorizontal:width/8,

	},
	row2:{
		flex:2,
		//backgroundColor:'blue',
		justifyContent:'center',
	},
	
	button:{
		backgroundColor:'white',
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		padding:10,
		borderRadius:width/2,
		marginHorizontal:width/10,
	}


})
