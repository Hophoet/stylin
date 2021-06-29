import React, {useEffect, useState} from 'react';
import {TextInput, Image, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Indicator from './PresentationIndicator';


const OnbordingItem = ({item, it,  index, scrollX, currentIndex, navigateTo}:any) => {

	return(
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={item.image} style={styles.image}/>
			</View>
			<View style={styles.labelContainer}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.description}>
					{item.description}
						kjld f sdkj sdf sdlfj sdfjks dfsdf
					kjd fsk flskf jsdfjd
				</Text>
				{ index == 3 &&
					<TouchableOpacity 
						activeOpacity={.5}
						style={styles.button}
						onPress={()=>{ navigateTo('Register')}}
						
					>
						<Text style={styles.buttonLabel}>Connexion</Text>
					</TouchableOpacity>
				}
			</View>
			<Indicator item={item} index={index} scrollX={scrollX} currentIndex={currentIndex}/>
		</View>
	)
}
export default OnbordingItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'white',
		width:width
	},
	button:{
		alignSelf:'center',
		marginTop:10,
		paddingVertical:10,
		backgroundColor:'#6C63FF',
		paddingHorizontal:20,
		borderRadius:20,
		minWidth:width/2,
		justifyContent:'center',
		alignItems:'center',
	},
	buttonLabel:{
		color:'white',
		fontSize:17,
		fontWeight:'bold',
	},
	labelContainer:{
		flex:.3,
		//backgroundColor:'blue',
		//padding:10,
	},
	footerContainer:{
		backgroundColor:'red',
		paddingVertical:50,
	},
	imageContainer:{
		flex:.7,
		justifyContent:'center',
		alignItems:'center',
	},
	image:{
		justifyContent:'center',
		width:width,
		resizeMode:'contain',	
	},
	title:{
		textAlign:'center',
		fontWeight:'bold',
		fontSize:28,
		marginBottom:10,
		
	},
	description:{
		textAlign:'center',
		paddingHorizontal:64,

	}
})
