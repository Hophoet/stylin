import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import Svg, { Circle, Text as CsvText } from "react-native-svg";
import { ApplicationProvider, Layout } from '@ui-kitten/components';

import { bgLinearGradient, sideBarLinearGradient} from '../../assets/colors/main';
import IconActionBox from '../../components/IconActionBox';
import Icon from "react-native-vector-icons/Ionicons";
import QRCodeModal from '../../components/modals/QRCodeModal';

const iconActions = [
	{icon:'wifi', action:()=>{}},

]

const Profile = ({navigation}:any) => {

  const [value, setValue] = useState("");
  return (
      <View style={styles.container}>
		<View style={styles.row1}>
            	<Text style={styles.title}>Votre Profil</Text>
            	<Text style={styles.description}>
					Lorem aut, consectetur blanditiis enim  Ullam, ducimus excepturi!	Bienvenue
				</Text>
		</View>
		<View style={styles.row2}>
			<Svg width={width/2} height={width/2}>
					<CsvText
					// stroke="white"
					fontSize="25"
					x={width / 4}
					y={width / 4}
					fill='white'
					textAnchor="middle"
					>
					12 525
					</CsvText>
					<CsvText
					// stroke="white"
					fontSize="17"
					x={width / 4}
					y={width / 3.2}
					fill='white'
					textAnchor="middle"
					>
						XOF
					</CsvText>
				 <Circle
					cx={width/4}
					cy={width/4}
					r={width/5}
					stroke={sideBarLinearGradient.top}
					strokeWidth="2.5"
					fill='none'
				  />
				{/* <Circle
				  stroke="#2162cc"
				  fill="none"
				  cx={size / 2}
				  cy={size / 2}
				  r={radius}
				  strokeDasharray={`${circunference} ${circunference}`}
				/> */}
			  </Svg>
		</View>
		<View style={styles.row3}>
            	<Text style={styles.row3Title}>
					Lorem ipsum  aut, consectetur lenz ldfk df
					Lorem ipsum  aut, consectetur lené l
				</Text>
            	<Text style={styles.phoneNumber}>(228) 98 78 34 00</Text>
				<QRCodeModal/>
		</View>
		<View style={styles.row4}>
		</View>
      </View>
  );

}
export default Profile;


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
		justifyContent:'center',
		alignItems:'center',
	},
	row3:{
		// paddingHorizontal:width/8,
	},
	row3Title:{
		textAlign:'center',	
		paddingVertical:5,
		paddingRight:20,
		color:'white',
		opacity:.5,
	},
	row4Row:{
		flexDirection:'row',
		justifyContent:'center'
	},
	phoneNumber:{
		color:sideBarLinearGradient.top,
		fontSize:20,
		alignSelf:'center',
	},
})
