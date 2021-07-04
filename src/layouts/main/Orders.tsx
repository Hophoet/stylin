import React,{useEffect} from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList
} from "react-native";
import OrderItem from '../../components/OrderItem';
import MainHeader from '../../components/MainHeader';
import {orders} from '../../data/data'


const Orders = ({navigation}:any) => {
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
            <Text style={styles.headerTitle}>Orders</Text>
        </View>
        <View style={styles.row2}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={orders}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item, index})=>(
              <OrderItem 
                icon={'card-outline'}
                navigate={navigation.navigate}
                item={item}/>
            )}
          />
        </View>
      </View>
  );
}
export default Orders;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
    paddingHorizontal:20,
    backgroundColor:'white',

	},
  row1:{
  },
  row2:{
    flex:1,
    flexDirection:'row',
    // backgroundColor:'blue',
    paddingVertical:20,
  },
  row2Column1:{
    justifyContent:'center',
    alignSelf:'center',
    paddingRight:10,
  },
  profileImage:{
      width:width/4,
      height:width/4,
      borderRadius:width/2,

    },
  name:{
    fontSize:20,
    fontWeight:'bold',
  },
  email:{
    fontWeight:'bold',
  },
  username:{
  },
  row2Column2:{
    justifyContent:'center',
    alignSelf:'center'
  },
  headerTitle:{
        paddingBottom:20,
        fontSize:34,
        fontWeight:'bold',
    },
    row3:{
      paddingVertical:20,
      flex:4,
      // backgroundColor:'red',
    },
    row4:{
      paddingVertical:20,
      flex:1,
    }
})
