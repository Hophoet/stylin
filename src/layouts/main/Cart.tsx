import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList
} from "react-native";
import { bgLinearGradient, sideBarLinearGradient} from '../../assets/colors/main';
import HomeHeader from '../../components/HomeHeader';
import ProductItem from '../../components/ProductItem';
import CartProductItem from '../../components/CartProductItem';
import CButton from '../../components/CButton';

import {productCategories, products} from '../../data/data'


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
            <CButton 
                onPress={()=>{}}
                iconPosition='left'
                iconColor='white'
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

	},
    row1:{
        height:width/8,
        // backgroundColor:'red',
        justifyContent:'center',
    },
    row2:{
    },
    headerTitle:{
        fontSize:30,
        // fontWeight:'bold',
    },
    itemsSeparator:{
        margin:5,
    }
})
