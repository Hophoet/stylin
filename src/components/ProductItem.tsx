
import React, {useState} from 'react'
import {TextInput, ImageBackground, Image, StyleSheet, View , Text, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'






const ProductItem = ({item, width, height}:any) => {
  const [isFavorite, toggleFavorite] = useState(true);

	return(
		<View style={[styles.container, {width:width, height:height}]}>
			<View style={styles.row1}>
				<ImageBackground
					style={styles.imageBackground}
					source={item.image}
					resizeMode='cover'
				>
					<View style={styles.imageBackgroundRow1}>
						<TouchableOpacity 
							style={styles.heartButton}	
							onPress={()=>toggleFavorite(!isFavorite)}
						>
							<Icon 
								name={(isFavorite)?'heart':'heart-outline'} 
								size={20} 
								color={(isFavorite)?'red':'black'}/>
						</TouchableOpacity>
					</View>
					<View style={styles.imageBackgroundRow2}>
						<View style={styles.imageBackgroundRow2Column1}>
							<Text style={styles.productName}>product name</Text>	
							<Text style={styles.productCaracteristics}>product name</Text>	
						</View>
						<View style={styles.imageBackgroundRow2Column2}>
							<Text style={styles.productPrice}>$79</Text>	
						</View>
					</View>
				</ImageBackground>
			</View>
			<View style={styles.row2}>
						<TouchableOpacity 
							style={styles.footerButton}	
						>
							<Icon 
								name='cart'
								size={30} 
								color='black'
								/>
						</TouchableOpacity>
			</View>
		</View>
	)
}

export default ProductItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		// backgroundColor:'red',
		padding:10,
		elevation:5,
	},
	imageBackground:{
		flex:1,
		justifyContent:'space-between',
	},
	row1:{
		flex:1,
	},
	row2:{
		flexDirection:'row',
		backgroundColor:'white',
		justifyContent:'space-between',
		alignSelf:'flex-end',
		paddingHorizontal:10,
		paddingVertical:5,
	},
	imageBackgroundRow1:{
		// backgroundColor:'aqua',
		padding:2,
	},
	imageBackgroundRow2:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		paddingHorizontal:5,
	},
	heartButton:{
		backgroundColor:'white',
		padding:5,
		elevation:5,
		alignSelf:'flex-end',
		borderRadius:width/2,
	},
	productName:{
		fontSize:20,
		color:'white',
		fontWeight:'bold',
	},
	productPrice:{
		color:'white',
		fontWeight:'bold',

	},
	productCaracteristics:{
		color:'white',
	},
	footerButton:{
		backgroundColor:'white',
		padding:5,
	},
	})
