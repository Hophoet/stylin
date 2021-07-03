
import React, {useState} from 'react'
import {ImageBackground, StyleSheet, View , Text, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ProductItem = ({item, width, height, navigate}:any) => {
  const [isFavorite, toggleFavorite] = useState(true);

	return(
		<View style={[styles.container, {width:width, height:height}]}>
			<TouchableOpacity 
				onPress={()=>{
					navigate('ProductDetail', {product:item})
				}}	
			style={styles.row1}>
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
							<Text style={styles.productName}>{item.name}</Text>	
							<Text numberOfLines={2} style={styles.productCaracteristics}>{item.caracteristics}</Text>	
						</View>
						<View style={styles.imageBackgroundRow2Column2}>
							<Text style={styles.productPrice}>${item.price}</Text>	
						</View>
					</View>
				</ImageBackground>
			</TouchableOpacity>
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
		// backgroundColor:'white',
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
		// backgroundColor:'black',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		paddingHorizontal:5,
	},
	imageBackgroundRow2Column1:{
		flex:3
	},
	imageBackgroundRow2Column2:{
		flex:1
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
		fontSize:20,
		color:'white',
		fontWeight:'bold',

	},
	productCaracteristics:{
		color:'white',
	},
	footerButton:{
		// backgroundColor:'white',
		padding:5,
	},
	})
