import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";


const Register = () => {

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          <PhoneInput
            ref={phoneInput}
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
          >
            <Text style={styles.buttonLabel}>continuer</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </>
  );

}
export default Register;

const styles = StyleSheet.create({
	container:{
		flex:1,
        justifyContent:'center',
        alignItems:'center',
	},
    activeButton:{
		backgroundColor:'#111',
        marginVertical:10,
        padding:10,
    },
    notActiveButton:{
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
    }
})
