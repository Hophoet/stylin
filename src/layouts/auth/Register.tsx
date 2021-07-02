import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import { bgLinearGradient} from '../../assets/colors/main';


const Register = ({navigation}:any) => {

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  return (
    <>
      <StatusBar backgroundColor={bgLinearGradient.top} barStyle="dark-content" />
      <View style={styles.container}>
			  <LinearGradient 
          colors={[bgLinearGradient.top, bgLinearGradient.bottom]} 
          style={styles.linearGradient}>
          <PhoneInput
            ref={phoneInput}
            containerStyle={styles.phoneInputContainer}
            defaultValue={value}
            defaultCode="TG"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
              const checkValid = phoneInput.current?.isValidNumber(text);
              setValid(checkValid ? checkValid : false);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow={false}
            autoFocus
          />
          <TouchableOpacity
            disabled={!valid}
            style={[
                (valid)
                ?styles.activeButton
                :styles.notActiveButton
            ]}
            onPress={()=>{
              navigation.navigate('CodeVerification');
            }}
          >
            <Text style={styles.buttonLabel}>continuer</Text>
          </TouchableOpacity>
			</LinearGradient>
      </View>
    </>
  );

}
export default Register;


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
  linearGradient:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
    activeButton:{
        minWidth:width/1.2,
		    backgroundColor:'#111',
        marginVertical:10,
        padding:10,
    },
    notActiveButton:{
        minWidth:width/1.2,
		    backgroundColor:'#1111',
        marginVertical:10,
        padding:10,
    },
    buttonLabel:{
        color:'white',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:20,
    },
    phoneInputContainer:{
      minWidth:width/1.2,
    }
})
