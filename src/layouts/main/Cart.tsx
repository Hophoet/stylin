import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  FlatList
} from "react-native";
import CartProductItem from '../../components/CartProductItem';
import CButton from '../../components/CButton';

import {products} from '../../data/data'


const Cart = ({navigation}:any) => {
  const [value, setValue] = useState("");

  return (
      <View style={styles.container}>
        <View style={styles.row1}>
            <Text style={styles.headerTitle}>Your Cart</Text>
        </View>
        <View style={styles.row2}>
              <FlatList
                data={products}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={(()=>
                    <View style={styles.itemsSeparator}/>
                )}
                keyExtractor={(item) =>item.id.toString()}
                renderItem={({item, index})=> (
                  <CartProductItem 
                    navigate={navigation.navigate}
                    item={item}/>
                )}
              />
        </View>
        <View style={styles.row3}>
          <View style={styles.row3ContentContainer}>
            <View style={styles.row3Row}>
                  <Text style={styles.row3RowKey}>Total Amount</Text>
                  <Text style={styles.row3RowValue}>$98</Text>
            </View>
            <View style={styles.row3Row}>
                  <Text style={styles.row3RowKey}>Discount Amount</Text>
                  <Text style={styles.row3RowValue}>$13</Text>
            </View>
            <View style={styles.row3Row}>
                  <Text style={styles.row3RowKey}>Chipping Amount</Text>
                  <Text style={styles.row3RowValue}>$9</Text>
            </View>
          </View>
        </View>
    <View style={styles.row4}>
            <CButton 
                onPress={()=>navigation.navigate('Shipping')}
                iconPosition='left'
                iconColor='4white'
                label='Checkout'
                textStyle={{color:'white'}}
                buttonStyle={{backgroundColor:'black'}}/>
        </View>
      </View>
  );

}
export default Cart;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
        paddingHorizontal:10,
        backgroundColor:'white',

	},
    row1:{
        height:width/8,
        // backgroundColor:'red',
        justifyContent:'center',
    },
    row2:{
      flex:4,
      // backgroundColor:'aqua',
    },
    headerTitle:{
        fontSize:30,
        // fontWeight:'bold',
    },
    itemsSeparator:{
        margin:5,
    },
    row3:{
      // flex:1,
      // backgroundColor:'blue',

    },
    row4:{
      // flex:1,
      // backgroundColor:'red',
    },
    row3ContentContainer:{
      paddingHorizontal:10,
      paddingVertical:20,
      elevation:2,
      backgroundColor:'white',
      // backgroundColor:'red',
      margin:10,
    },
    row3Row:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    row3RowKey:{
      fontSize:15,
    },
    row3RowValue:{
      fontSize:18,
      fontWeight:'bold',
    }
})
