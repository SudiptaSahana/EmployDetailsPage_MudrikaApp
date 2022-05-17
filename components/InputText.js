import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, Pressable } from "react-native";
import {
  useFonts,
  
} from "expo-font";



function InputText(props) {

  const [loaded] = useFonts({
    MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  return (
    <View>
        <TextInput
        style={styles.inputStyle}
        placeholder={props.entry}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  )
}

const styles= StyleSheet.create({

    inputStyle: {
      
        backgroundColor: "rgba(213, 243, 245, 1)",
        width: 278,
        height: 62, 
        borderColor: "rgba(0, 0, 0, 1)",
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 5,
        fontFamily: "MontserratSemibold",
        fontSize: 18,
        fontWeight:"600",
        marginBottom:7,
        marginLeft:5
    },
})

export default InputText