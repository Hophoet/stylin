import React, { useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import CButton from '../../components/CButton';
import MainHeader from '../../components/MainHeader';
import Icon from "react-native-vector-icons/Ionicons";


const DoneOrder = ({navigation}:any) => {
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
            <Icon name='checkmark-circle-outline' size={width/3.5} color='blue'/>
            <Text style={styles.title}>Your Order is Confirmed</Text>
            <Text style={styles.description}>Thank For Your Order</Text>
            <CButton 
                  onPress={()=>navigation.navigate('App')} 
                  label='Done'
                  textStyle={{color:'white'}}
                  buttonStyle={{backgroundColor:'black', minWidth:width/2}}/>
              <TouchableOpacity
                onPress={()=>navigation.navigate('App')} 
              >
                <Text style={styles.link}>continue shopping</Text>
              </TouchableOpacity>
        </View>
      </View>
  );


}
export default DoneOrder;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
        paddingHorizontal:20,
        backgroundColor:'white',

	},
    row1:{
      flex:1,
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    },
    row2:{
      // backgroundColor:'aqua',
    },
    row3:{
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        paddingBottom:5,
    },
    description:{
        paddingBottom:5,
        fontSize:25,
        fontWeight:'bold',
    },
    link:{
      color:'blue',
      fontWeight:'bold',
      fontSize:15,
    }
})
