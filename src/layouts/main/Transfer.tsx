import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import Svg, { Circle, Text as CsvText } from "react-native-svg";
import { ApplicationProvider, Layout } from '@ui-kitten/components';

import { bgLinearGradient, sideBarLinearGradient} from '../../assets/colors/main';
import IconActionBox from '../../components/IconActionBox';
import Icon from "react-native-vector-icons/Ionicons";

import TransferItem from '../../components/TransferItem';

const transfers = [
	{id: 1, phoneNumber:'(228) 87 11 67 09', action:()=>{}},
	{id: 3, phoneNumber:'(228) 98 00 67 67', action:()=>{}},
	{id: 7, phoneNumber:'(228) 99 66 67 67', action:()=>{}},

]

const Transfer = ({navigation}:any) => {

  const [value, setValue] = useState("");
  return (
      <View style={styles.container}>
		<View style={styles.row1}>
            	<Text style={styles.title}>Vos Transfert</Text>
            	<Text style={styles.description}>
					Lorem aut, consectetur blanditiis enim  Ullam, ducimus excepturi!	Bienvenue
				</Text>
		</View>
		<View style={styles.row2}>
			<FlatList 
				ItemSeparatorComponent= {
					() =>	<View style={styles.itemsSeparator} />
				}
				showsVerticalScrollIndicator={false}
				data={transfers}
				keyExtractor={item=>item.id.toString()}
				renderItem={({index, item}) => <TransferItem
					item={item}	
					/> }
			/>

		</View>
		<View style={styles.row3}>
		</View>
		<View style={styles.row4}>
		</View>
      </View>
  );

}
export default Transfer;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,

	},
	contentContainer:{
	},
	title:{
		color:sideBarLinearGradient.top,
		fontSize:25,
	},
	description:{
		paddingVertical:5,
		paddingRight:20,
		color:'white',
		opacity:.5,
	},
	row1:{

	},
	row2:{
		// backgroundColor:'red',
	},
	row3:{
		// paddingHorizontal:width/8,
	},
	itemsSeparator:{
		height:StyleSheet.hairlineWidth,
		backgroundColor:'white',
		marginVertical:10,
	}
})
