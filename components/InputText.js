import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, Pressable } from "react-native";
import {
  useFonts,
  
} from "expo-font";



function InputText(props) {

  // const [loaded] = useFonts({
  //   MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  // });

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
        width: 275,
        height: 62, 
        borderColor: "rgba(0, 0, 0, 1)",
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 5,
        fontFamily: "Montserrat_600Semibold",
        fontSize: 18,
        fontWeight:600,
        marginBottom:7,


        // font-size: 18px;
        // font-family: Montserrat, sans-serif;
        // font-weight: 600;
        // color: rgba(0, 0, 0, 1);
        // width: 275px;
        // height: 62px;
        // word-wrap: break-word;
        // margin-bottom: 7px;
    //     position: absolute,
    // top: 171,
    // left: 33,
    // backgroundcolor: rgba(214, 243, 245, 1),
    // width: 278,
    // height: 61,
    // borderradius: 5,


    // position: absolute;
    // top: 321px;
    // left: 33px;
    // background-color: rgba(40, 101, 94, 1);
    // width: 278px;
    // height: 61px;
    // border-radius: 10px;
    },
})

export default InputText