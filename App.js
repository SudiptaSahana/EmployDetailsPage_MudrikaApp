import { StatusBar } from "expo-status-bar";
import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import EmploymentDetails from "./components/EmploymentDetails";



export default function App() {



  return (
    <View style={styles.background}>
      <View style={styles.ellipseTop}> </View>
      <View style={styles.ellipseBottom}></View>
    
      <EmploymentDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    
    position: "relative",
    borderradius: 10,
    backgroundColor: "rgba(0, 191, 166, 1)",
    width: 428,
    height: 926,
  },

  ellipseTop: {
    position: "absolute",
    top: -36,
    right: 215,
    backgroundColor: "rgba(40, 101, 94, 1)",
    width: 263,
    height: 235,
    borderRadius: 131.5,
  },

  ellipseBottom: {
    position: "absolute",
    top: 698,
    left: 252,
    backgroundColor: "rgba(40, 101, 94, 1)",
    width: 263,
    height: 227,
    borderRadius: 131.5,
  },

 



});
