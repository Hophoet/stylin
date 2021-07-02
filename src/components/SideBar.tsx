import React, {useEffect, useState} from 'react';
import {TextInput, Image, ScrollView, FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { bgLinearGradient} from '../../assets/colors/main';
import Icon from "react-native-vector-icons/Ionicons";
import SideBarIcon from './SideBarIcon';



const SideBar = ({menus, activeMenu, setActiveMenu, sideBarVisible, toggleSideBar}:any) => {

	return(
		<View style={styles.container}>
			<LinearGradient 
				colors={['#33DDFF', '#1FA9FF']} 
				style={styles.linearGradient}>
                    <View style={styles.header}>
                        <TouchableOpacity 
                            onPress={()=>toggleSideBar(!sideBarVisible)}
                            style={styles.container}>
                            <Icon name={'list'} size={30} color='white' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconsContainer}>
                        {
                            menus.map((item, index) => {
                                return (
                                    <SideBarIcon
                                        activeMenu={activeMenu}
                                        setActiveMenu={setActiveMenu}
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
      flex:8,
      justifyContent:'space-around',
      alignItems:'center',
      marginBottom:width/2
  },
  header:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  }
})
