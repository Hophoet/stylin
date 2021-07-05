import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
} from "react-native";
import CButton from '../../components/CButton';
import MainHeader from '../../components/MainHeader';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


const Payment = ({navigation}:any) => {
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
  const [value, setValue] = useState("");

  const _onChange = (value) => {
	console.log(value);
  }

  return (
      <View style={styles.container}>
        <View style={styles.row1}>
            <Text style={styles.headerTitle}>Payment</Text>
        </View>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>

        <View style={styles.row2}>
		  <CreditCardInput onChange={_onChange} />	
        </View>
      <View style={styles.row3}>
              <CButton 
                  onPress={()=>{navigation.navigate('DoneOrder')}}
                  label='pay'
                  textStyle={{color:'white'}}
                  buttonStyle={{backgroundColor:'black'}}/>
          </View>
        </ScrollView>
      </View>
  );


}
export default Payment;


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
      //backgroundColor:'aqua',
    },
    row3:{
      paddingVertical:30,
    },
    headerTitle:{
        paddingBottom:20,
        fontSize:34,
        fontWeight:'bold',
    },
    cart:{
      height:width/1.5,
      borderRadius:20,
      backgroundColor:'black',
    }
})
