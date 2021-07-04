import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
} from "react-native";
import CButton from '../../components/CButton';
import LabelTextInput from '../../components/LabelTextInput';
import MainHeader from '../../components/MainHeader';


const UpdatePersonalInformations = ({navigation}:any) => {
  useEffect(() => {
        navigation.setOptions({
          header: () => (
            <MainHeader 
              firstAction={()=>{navigation.goBack()}}	
              // title='Shipping'
              // description='Enter your shipping informations'
              secondAction={()=>{}}

          />
          ),
        })
  }, [])

  return (
      <View style={styles.container}>
        <View style={styles.row1}>
            <Text style={styles.headerTitle}>Update personal informations</Text>
        </View>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>

        <View style={styles.row2}>
							<LabelTextInput 
                icon='lock-closed'	
								placeholder='Last name'
                placeholderTextColor='black'
                selectionColor='black'
                label='Last name'
                containerStyle={{marginBottom:20,}}
							/>
							<LabelTextInput 
                icon='lock-closed'	
								placeholder='First name'
                placeholderTextColor='black'
                selectionColor='black'
                label='First name'
                containerStyle={{marginBottom:20,}}
							/>
							<LabelTextInput 
                icon='lock-closed'	
								placeholder='Email'
                placeholderTextColor='black'
                selectionColor='black'
                label='Email address'
                containerStyle={{marginBottom:20,}}
							/> 
							<LabelTextInput 
                icon='lock-closed'	
								placeholder='Phone number'
                placeholderTextColor='black'
                selectionColor='black'
                label='Phone number'
                containerStyle={{marginBottom:20,}}
							/> 
        </View>
      <View style={styles.row3}>
              <CButton 
                  onPress={()=>{navigation.navigate('Profile')}}
                  label='Update'
                  textStyle={{color:'white'}}
                  buttonStyle={{backgroundColor:'black'}}/>
          </View>
        </ScrollView>
      </View>
  );
}

export default UpdatePersonalInformations;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
        paddingHorizontal:20,
        backgroundColor:'white',

	},
    row1:{
        // backgroundColor:'red',
        justifyContent:'center',
    },
    row2:{
      // backgroundColor:'aqua',
    },
    row3:{
      paddingVertical:30,
    },
    headerTitle:{
        paddingBottom:20,
        fontSize:34,
        fontWeight:'bold',
    },
})
