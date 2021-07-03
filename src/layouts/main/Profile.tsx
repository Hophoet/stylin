import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList
} from "react-native";
import { bgLinearGradient, sideBarLinearGradient} from '../../assets/colors/main';
import CButton from '../../components/CButton';
import ActionButton from '../../components/ActionButton';
import {profileActionButtons} from '../../data/data'




const Profile = ({navigation}:any) => {

  return (
      <View style={styles.container}>
        <View style={styles.row1}>
            <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <View style={styles.row2}>
          <View style={styles.row2Column1}>
              <Image
                style={styles.profileImage}
                source={require('../../assets/images/bg1.jpg')}
              />
          </View>
          <View style={styles.row2Column1}>
            <Text style={styles.name}>Lina Hub</Text>  
            <Text style={styles.email}>Lina@gmail.com</Text>  
            <Text style={styles.username}>@linaHub</Text>  
          </View>
        </View>
        <View style={styles.row3}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={profileActionButtons}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item, index})=>(
              <ActionButton 
                icon={'arrow-forward'}
                item={item}/>
            )}

          />
        </View>
        <View style={styles.row4}>
              <CButton 
                  onPress={()=>{navigation.navigate('Auth')}}
                  label='Log Out'
                  iconPosition='left'
                  iconColor='white'
                  icon='log-out-outline' 
                  textStyle={{color:'white'}}
                  buttonStyle={{backgroundColor:'black'}}/>
        </View>
      </View>
  );

}
export default Profile;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
    paddingHorizontal:20,
    backgroundColor:'white',

	},
  row1:{
    flex:1,
  },
  row2:{
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
