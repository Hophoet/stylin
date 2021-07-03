
import React, {useState} from 'react'
import {Image, StyleSheet, View , Text, Dimensions} from 'react-native'
import CIconButton from './CIconButton'

const CartProductItem = ({item}:any) => {
	const [quantity, setQuantity] = useState(1)

	return(
		<View style={[styles.container,]}>
			<View style={styles.column1}>
				<Image 
					source={item.image}
					style={styles.image}/>
			</View>
			<View style={styles.column2}>
				<Text style={styles.label}>{item.name}</Text>
				<Text style={styles.label}>3x{item.price}</Text>
				<Text style={styles.label} >red</Text>
			</View>
			<View style={styles.column3}>
				
				<CIconButton
					icon='add'
					onPress={()=>{
						if(quantity > 1){
							setQuantity(quantity-1)
						}
					}}
					iconSize={20}
					buttonStyle={[{
						backgroundColor:'white',
						borderWidth:2,
						borderColor:'black',
						width:width/12, 
						height:width/12, 
					},
					]
					} 
				/>
				<Text style={styles.quantity}>{quantity}</Text>
				<CIconButton
					onPress={()=>{
						if(quantity < 5){
							setQuantity(quantity+1)
						}
					}}
					icon='add'
					iconColor='black'
					iconSize={20}
					buttonStyle={[{
						backgroundColor:'white',
						borderWidth:2,
						borderColor:'black',
						width:width/12, 
						height:width/12, 
					},
					]
					
					} 
				/>
			</View>
		</View>
	)
}

export default CartProductItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
		elevation:2,
		flexDirection:'row',
		paddingVertical:10,
		paddingHorizontal:5,
		margin:5,

		
	},
	column1:{
		flex:1,
		// backgroundColor:'blue',
		justifyContent:'center',
		alignItems:'center',
	},
	column2:{
		flex:2,
		// backgroundColor:'green',
	},
	column3:{
		flex:1,
		// backgroundColor:'aqua',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
	},
	image:{
		width:width/5,
		height:width/5,
	},
	quantity:{
		fontSize:20,
		color:'black',
		// fontWeight:'bold',
		paddingHorizontal:5,
	},
	label:{
		fontSize:17,
		fontWeight:'bold',
	}

	})
