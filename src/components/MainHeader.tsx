import React,{useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const MainHeader = (
		{
			firstAction,
			firstActionIcon,
			secondAction,
			secondActionLabel,
			title,
			description
		}:any) => {

    useEffect(() => {
    }, [])

    return(
        <View style={styles.container}>
			<View style={styles.row1}>
			{ firstAction &&
				<TouchableOpacity 
					onPress={firstAction}
					style={styles.row1Action1Container}
				>
					<Icon name={firstActionIcon?firstActionIcon:'arrow-back'} size={30} color='gray'/>
				</TouchableOpacity>
			}
			{ secondAction &&
				<TouchableOpacity 
					onPress={secondAction}
					style={styles.row1Action2Container}
				>
					<Text style={styles.row1Action2Label}>{secondActionLabel}</Text>
				</TouchableOpacity>
			}
			</View>
			{ title &&
			<View style={styles.row2}>
				<Text style={styles.row2Title}>{title}</Text>
				{ description &&
					<Text style={styles.row2Description}>{description}</Text>
				}
			</View>
			}
        </View>
    );

    
}

export default MainHeader;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
		backgroundColor:'white',
		//backgroundColor:'red',
		//height:width/7
	
    },
	row1:{
		flexDirection:'row',
		justifyContent:'space-between',
		//backgroundColor:'blue',
	},
	row1Action1Container:{
		justifyContent:'center',
		alignItems:'center',
		padding:10,
	},	
	row1Action2Container:{
		justifyContent:'center',
		alignItems:'center',
		padding:10,
	},
	row1Action2Label:{
		color:'gray',
		fontSize:15,
	},
	row2:{
		paddingHorizontal:10,
	},
	row2Title:{
		fontSize:30,
		fontWeight:'bold',
		color:'gray',
	},
	row2Description:{
		fontSize:15,
		opacity:.5,
		color:'gray',
	}
})
