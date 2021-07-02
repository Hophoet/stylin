import React, {useEffect, useState} from 'react';
import {TextInput, Image, Modal, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { bgLinearGradient, sideBarLinearGradient} from '../../assets/colors/main';



const QRCodeModal = ({icon, title}:any) => {
  	const [modalVisible, toggleModalVisibility] = useState(false);
	const toggleModal = () => {
		toggleModalVisibility(!modalVisible)
	}
	return(
		<View 
			style={styles.container}
		>
				<Modal
                    transparent={true}
                    onRequestClose={toggleModal}
                    visible={modalVisible}>
						<TouchableOpacity 
							style={styles.modalContainer}
							onPress={toggleModal}	
						>
							<View style={styles.modalContent}>
								<Icon 
									color={'black'} 
								
									style={styles.modalIcon}
									name='qr-code-outline' 
									size={150}/>
								<View style={styles.modalInfosContainer}>
									<Text style={styles.modalScanLabel}>Fait scannez le QR code par le client pour confirmer la livraison</Text>
								</View>
							</View>
						</TouchableOpacity>
                </Modal>
			<TouchableOpacity
				style={styles.qrcodeButton}
				onPress={toggleModal}
			>
				<Icon color={sideBarLinearGradient.top} name='qr-code' size={70}/>
			</TouchableOpacity>
		</View>
	)
}
export default QRCodeModal;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
	},
	qrcodeButton:{
		alignSelf:'center',
	},
	modalContainer:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#000B',
	},
	modalContent:{
		backgroundColor:'white',
		paddingVertical:10,
		width:width/1.9,
		minHeight:height/2.5,
		justifyContent:'center',
	},
	modalInfosContainer:{
	 	paddingVertical:10,
		paddingHorizontal:5,
	},
	modalScanLabel:{
		justifyContent:'center',
		alignItems:'center',
		textAlign:'center',
	},
	modalIcon:{
		// backgroundColor:'red',
		flex:1,
		alignSelf:'center',
	}
})
