import React, {useEffect, useState} from 'react';
import {TextInput, Image, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { bgLinearGradient} from '../../assets/colors/main';
import Icon from "react-native-vector-icons/Ionicons";



const TranferItem = ({item}:any) => {

	return(
		<View style={styles.container}>
            <TouchableOpacity 
                onPress={()=>{}}
                style={styles.container}>
                <Icon name={'card'} size={30} color='white' />
                <Text style={styles.label}>{item.phoneNumber}</Text>
            </TouchableOpacity>
		</View>
	)
}

export default TranferItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
	},
    label:{
        color:'white',
        paddingLeft:10,
    },
    iconsContainer:{
      flex:8,
      justifyContent:'space-around',
      marginBottom:width/2
    },
    header:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'red',
  }
})
