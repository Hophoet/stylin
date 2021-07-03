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

import {productCategories, products} from '../../data/data'

const iconActions = [
	{icon:'wifi', action:()=>{}},

]

const Home = ({navigation}:any) => {
  const [value, setValue] = useState("");
  const [selectedCategory, selectCategory] = useState(productCategories[0]);

  return (
      <View style={styles.container}>
        <HomeHeader/>
        <View style={styles.row1}>
          <ImageBackground 
            source={require('../../assets/images/hbg.jpg')}
            style={styles.row1ImageBackground}>
              <View style={styles.row1ImageBackgroundContentContainer}>
                  <Text style={styles.row1Label1}>30% off</Text>
                  <Text style={styles.row1Label2}>Bonus on order</Text>
              </View>

            </ImageBackground>
        </View>
        <View style={styles.row2}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
          >

          {
            productCategories.map((item, index) =>  (
                  <TouchableOpacity 
                    onPress={()=>selectCategory(item)}
                    style={styles.categoryButton}
                    key={index.toString()}>
                    <Text style={[styles.categoryName,
                      (selectedCategory == item) && {textDecorationLine:'underline'}
                    
                    ]}>{item.name}</Text>
                  </TouchableOpacity>
            )
            )
          }
          </ScrollView>
        </View>
        <View style={styles.row3}>
          <View style={styles.row3Column1}>
              <FlatList
                data={products}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) =>item.id.toString()}
                renderItem={({item, index})=> (
                  <ProductItem 
                    width={width/2}
                    height={width/2}
                    item={item}/>
                )}
              />
          </View>
          <View style={styles.row3Column2}>

              <FlatList
                data={products}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) =>item.id.toString()}
                renderItem={({item, index})=> (
                  <ProductItem 
                    width={width/2}
                    height={width/1}
                    item={item}/>
                )}
              />
          </View>
        </View>
      </View>
  );

}
export default Home;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,

	},
  row1:{
    height:width/2.5,
  },
  row2:{
    flexDirection:'row',
  },
  row1ImageBackground:{
    flex:1, 
    justifyContent:'center',
  },
  row1ImageBackgroundContentContainer:{
    // backgroundColor:'red',
    alignSelf:'flex-start',
    paddingHorizontal:10,
  },
  row1Label1:{
    color:'white',
    fontWeight:'bold',
    fontSize:40,
  },
  row1Label2:{
    color:'white',
    fontSize:20,
  },
	title:{
		color:'black',
		fontSize:25,
	},
  categoryButton:{
    paddingHorizontal:10,
    // backgroundColor:'red',
    marginHorizontal:5,
  },
  categoryName:{
    fontSize:20,
    fontWeight:'bold',
  },
  row3:{
    // backgroundColor:'green',
    flexDirection:'row',
    flex:1,
  },
  row3Column1:{
    flex:1,
    // backgroundColor:'red',

  },
  row3Column2:{
    flex:1,
    // backgroundColor:'aqua',
  }
})
