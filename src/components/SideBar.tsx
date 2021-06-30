import React, {useEffect, useState} from 'react';
import {TextInput, Image, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { bgLinearGradient} from '../../assets/colors/main';
import SideBarIcon from './SideBarIcon';


const icons = [
    {id:1, icon:'home'},
    {id:2, icon:'settings'},
    {id:3, icon:'heart'},
    {id:4, icon:'card'},
    {id:5, icon:'scan'},
]


const SideBar = ({item, navigateTo}:any) => {

	return(
		<View style={styles.container}>
			<LinearGradient 
				colors={['#33DDFF', '#1FA9FF']} 
				style={styles.linearGradient}>
                    <View style={styles.iconsContainer}>
                        {
                            icons.map((item, index) => {
                                return (
                                    <SideBarIcon
                                        key={index.toString()} 
                                        item={item}
                                    />
                                )
                            })
                        }

                    </View>
            </LinearGradient>
		</View>
	)
}
export default SideBar;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
        flex:1,
	},
  	linearGradient:{
		  flex:1,

  },
  iconsContainer:{
      flex:1,
      justifyContent:'space-around',
      alignItems:'center',
      marginVertical:width/3.2,
  }
})
