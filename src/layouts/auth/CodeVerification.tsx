
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import { bgLinearGradient} from '../../assets/colors/main';


const CodeVerification = () => {

  const [code, setCode] = useState("");
  const [valid, setValid] = useState(false);
  const textInput = useRef<TextInput>(null);
  return (
    <>
      <StatusBar backgroundColor={bgLinearGradient.top} barStyle="dark-content" />
      <View style={styles.container}>
			  <LinearGradient 
          colors={[bgLinearGradient.top, bgLinearGradient.bottom]} 
          style={styles.linearGradient}>
          <TextInput
            ref={textInput}
            value={code}
            autoFocus
            textAlign='center'
            placeholderTextColor='white'
            selectionColor={'white'}
            keyboardType={'number-pad'}
        
            placeholder='_ _ _ _'
            style={styles.textInput}
            onChangeText={(text)=>{
                if(text.length <= 4){
                    setCode(text)
                }
            }}
          />
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionLabel}>Entrer votre code de verification envoyer sur votre numéro de télephone</Text>
                
            </View>
          <TouchableOpacity
            style={[
                styles.activeButton
            ]}
          >
            <Text style={styles.buttonLabel}>verifier</Text>
          </TouchableOpacity>
			</LinearGradient>
      </View>
    </>
  );

}
export default CodeVerification;


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
    textInput:{
        color:'white',
        fontSize:30,
    },
    descriptionLabel:{
        color:'white',
        textAlign:'center',
        opacity:.5,
    },
    descriptionContainer:{
        maxWidth:width/1.2,

    }
    
    
})
