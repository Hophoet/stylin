import React, { useState, useEffect } from "react";
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
import MainHeader from '../../components/MainHeader';
import CButton from '../../components/CButton';
import Icon from 'react-native-vector-icons/Ionicons'
import CIconButton from '../../components/CIconButton';

import {productCategories, productColors, productSizes} from '../../data/data'
import { MenuItem } from "@ui-kitten/components";

const iconActions = [
	{icon:'wifi', action:()=>{}},

]

const ProductDetail = ({navigation, route}:any) => {
  useEffect(() => {
        navigation.setOptions({
          header: () => (
            <MainHeader 
              firstAction={()=>{navigation.goBack()}}	
              secondAction={()=>{}}
          />
          ),
        })
  }, [])
  const [product, setProduct] = useState(route.params.product);
  const [isFavorite, toggleFavorite] = useState(true);
  const [selectedColor, selectColor] = useState(productColors[0]);
  const [selectedSize, selectSize] = useState(productSizes[0]);

  return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
            
        <View style={styles.row1}>
          <ImageBackground 
            style={styles.imageBackground}
            resizeMode='cover'
            source={product && product.image}
            >
              <View style={styles.imageBackgroundRow1}>
                <TouchableOpacity
							    onPress={()=>toggleFavorite(!isFavorite)}
                  style={styles.heartButton}>
                    <Icon 
                      name={(isFavorite)?'heart':'heart-outline'} 
                      size={30} 
                      color={(isFavorite)?'red':'black'}/>
                  </TouchableOpacity>
              </View>
          
          </ImageBackground> 
        </View>
        <View style={styles.row2}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productCaracteristics}>{product.caracteristics}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
        </View>
        <View style={styles.row3}>
            <View style={styles.row3Column1}>
                <Text style={styles.colorsLabel}>Color</Text>
                <View style={styles.colorsContainer}>
                    {
                        productColors.map((item,index)=>(
                            <CIconButton
                                key={index.toString()}
                                onPress={()=>selectColor(item)}
                                buttonStyle={[{
                                    backgroundColor:item.color, 
                                    width:width/12, 
                                    height:width/12, 
                                    margin:5},
                                    (selectedColor == item) && {
                                        borderWidth:2, borderColor:'black'
                                    }
                                ]
                                
                                } 
                            />
                        ))
                    }
                </View>
            </View>
            <View style={styles.row3Column2}>
                <Text style={styles.sizesLabel}>Size</Text>
                <View style={styles.sizesContainer}>

                    {
                        productSizes.map((item,index)=>(
                            <TouchableOpacity 
                                onPress={()=>selectSize(item)}
                                style={[styles.sizeButton,
                                   (selectedSize == item) &&{
                                        backgroundColor:'black',
                                   } 
                                ]}
                            >
                                <Text 
                                    style={[styles.sizeLabel,
                                        (selectedSize == item) &&{
                                                color:'white'
                                        } 
                                    ]}>{item.size}</Text>
                                    
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </View>

        <View style={styles.row4}>
            
					<CButton 
						onPress={()=>{}}
						iconPosition='left'
						icon='cart' 
                        iconColor='white'
						label='Add to Cart'
						textStyle={{color:'white'}}
						buttonStyle={{backgroundColor:'black'}}/>
        </View>
        </ScrollView>
      </View>
  );

}
export default ProductDetail;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
    backgroundColor:'white',

	},
  row1:{
    height:height/1.5,
    // width:'100%',
  },
  imageBackground:{
		overflow:'hidden',
    backgroundColor:'red',
    flex:1,
    // borderRadius:width/3,
  },
  imageBackgroundRow1:{
    padding:10,
    // backgroundColor:'red',
  },
  row2:{
    justifyContent:'center',
    alignItems:'center',
  },
  productName:{
    fontSize:25,
    fontWeight:'bold',
  },
  productCaracteristics:{
    opacity:.5,
    textAlign:'center',
  },
  productPrice:{
    fontSize:25,
    fontWeight:'bold',
  },
	heartButton:{
		backgroundColor:'white',
		padding:10,
		elevation:5,
		alignSelf:'flex-end',
		borderRadius:width/2,
	},
    row3:{
        // backgroundColor:'red',
        flexDirection:'row',
    },
    row3Column2:{
        flex:1,
        // backgroundColor:'blue',
        alignItems:'center',
    },
    row3Column1:{
        flex:1,
        // backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
    },
    colorsContainer:{
        // backgroundColor:'#ffed',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    sizesContainer:{
        // backgroundColor:'#ffed',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    sizeButton:{
        backgroundColor:'white',
        width:width/12,
        height:width/12,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:width/2,
        borderWidth:2, 
        borderColor:'black',
        marginHorizontal:5,
    },
    sizeLabel:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
    },
    colorsLabel:{
        fontSize:17,
    },
    sizesLabel:{
        fontSize:17,
    },
    row4:{
        paddingHorizontal:width/12
    }
})
