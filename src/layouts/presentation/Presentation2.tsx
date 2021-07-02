
import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Dimensions} from 'react-native'
import CButton from '../../components/CButton';


const Presentation = ({navigation}:any) => {
	const navigateTo = (screen:string, data:any) => {
		navigation.navigate(screen, data);
	}

	const navigateToSignIn = ()=>{
		navigation.navigate('SignIn')
	}
	const navigateToSignUp = ()=>{
		navigation.navigate('SignUp')
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
					<Text style={styles.row1Description}>Sign up now</Text>
					<Text style={styles.row1Description}>get 30% cosbock </Text>
					<Text style={styles.row1Description}>on first purchase</Text>
				</View>
				<View style={styles.row2}>
					<CButton 
						onPress={navigateToSignIn}
						iconPosition='left'
						label='Sign In'
					/>
					<CButton 
						onPress={navigateToSignUp}
						icon='mail' 
						iconPosition='left'
						label='Sign Up With E-mail'
					/>
					<CButton 
						label='Sign In With Facebook'
						iconPosition='left'
						icon='logo-facebook' 
						iconColor='white'  
						textStyle={{color:'white'}}
						buttonStyle={{backgroundColor:'blue'}}/>
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
	title:{
		top:50,
		alignSelf:'center',
		fontSize:50,
		textAlign:'center',
		fontWeight:'bold',
	},
	row1:{
		flex:2,
		//backgroundColor:'red',
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
		marginVertical:10,
		minHeight:50,
	},
	row2:{
		flex:2,
	},
	buttonLabel:{
		fontWeight:'bold',
		margin:5,
		fontSize:17,
	}


})
