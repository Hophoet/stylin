
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native'


export default class Splash extends React.Component{

	constructor(props){
		super(props)
	}

	componentDidMount(){
		// Add event listener, when the the component on focus
		this.props.navigation.addListener('focus', (e:any) => {
			console.log('component focus')
			setTimeout(()=>{
				this.props.navigation.navigate('Presentation1');
			}, 3000)
		});

	}

	componentDidUpdate(){
		console.log('component did mount')
	}


	render(){
		return(
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<Text style={styles.label}>Styl<Text style={styles.in}>In</Text></Text>
				</View>
			</View>
		)
	}

}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white',
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
