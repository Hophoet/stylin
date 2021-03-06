import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  FlatList
} from "react-native";
import ProductItem from '../../components/ProductItem';

import {products} from '../../data/data'


const Favorite = ({navigation}:any) => {

  return (
      <View style={styles.container}>
        <View style={styles.row1}>
            <Text style={styles.headerTitle}>Favoris</Text>
        </View>
        <View style={styles.row2}>
              <FlatList
                data={products}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) =>item.id.toString()}
                renderItem={({item, index})=> (
                  <ProductItem 
                    navigate={navigation.navigate}
                    width={width/1.2}
                    height={width}
                    item={item}/>
                )}
              />
        </View>
      </View>
  );

}
export default Favorite;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
    paddingHorizontal:20,
    alignItems:'center',
    backgroundColor:'white',

	},
  row1:{
  },
  row2:{
    flex:1,
  },
  headerTitle:{
        paddingBottom:20,
        fontSize:34,
        fontWeight:'bold',
    },
})
