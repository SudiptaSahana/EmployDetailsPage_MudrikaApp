import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputText from "./InputText";
import { useFonts } from "expo-font";
import { CheckBox, Input } from "react-native-elements";
import FilePicker from 'react-native-document-picker';





function EmploymentDetails() {

  const location = "Location";
  const scheme = "Scheme";
  const companyname = "Company Name";
  const MonthlyIncome = "Monthly Income";
  const BusinessAddress = "Business Address";
  const BusinessDescription = "Business Description";
  const [salaried, setSalaried] = useState(true);
  const [selfemployed, setSelfemployed] = useState(true);

  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  const dropSalaried = () => {
    setSalaried(true);
    setSelfemployed(false);
  };

  const dropSelfemployed = () => {
    setSalaried(false);
    setSelfemployed(true);
  };

 const handleFilePicker = async () =>{
   try {
    const response = await FilePicker.pick({
     presentationStyle: 'fullScreen',
   });  

   console.log(response);
   } catch (err) {
     console.log(err);
   }
 };

  return (
    <View style={styles.mainContainer}>
      {/* ----------------------Maintitle---------------------- */}
      <View>
        <Text style={styles.mainHeader}> Employment Details</Text>
      </View>

      <View style={styles.verticalBox}>
        <View style={styles.insideBox}>
          <InputText entry={location} />

          <InputText entry={scheme} />

          {/* ------------SecondTitle-------------- */}

          <Text style={styles.text242}>Employment Type</Text>
        </View>

        {/* ---------------------Hiddensalaried------------------------  */}

        {salaried ? (
          <View style={styles.hidden}>
            <InputText entry={companyname} />

            <InputText entry={MonthlyIncome} />
            <View style={styles.salariedbuttons}>
            <Pressable
              style={styles.button1}
              onPress={() => {
                this.handleFilePicker;
              }}
            >
              <Text style={styles.text1}>Upload Bank Statement</Text>
            </Pressable>
            <Pressable
              style={styles.button2}
              onPress={() => {
                Alert.alert("Proceed button is pressed");
              }}
            >
              <Text style={styles.text1}>Proceed</Text>
            </Pressable>
            </View>
            
          </View>
        ) : null}

        {/* -----------------------hiddenselfemployed-------------- */}

        {selfemployed ? (
          <View style={styles.hidden1}>
            <InputText entry={BusinessAddress} />

            <InputText entry={BusinessDescription} />
            <InputText entry={MonthlyIncome} />

            <Pressable
              style={styles.button}
              onPress={() => {
                this.handleFilePicker;
              }}
            >
              <Text style={styles.text1}>ITR Statement(2 year)</Text>
            </Pressable>
            <Pressable
              style={styles.button2}
              onPress={() => {
                Alert.alert("Upload Bank Statement");
              }}
            >
              <Text style={styles.text1}>Upload Bank Statement</Text>
            </Pressable>
            <Pressable
              style={styles.button2}
              onPress={() => {
                Alert.alert("Proceed button is pressed");
              }}
            >
              <Text style={styles.text1}>Proceed</Text>
            </Pressable>
          </View>
        ) : null}

        {/* ------------checkboxes----------- */}

        <View style={styles.secondpart}>
          <View style={styles.checkbox}>
            <CheckBox
              title="Salaried"
              checked={salaried}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              color="black"
              onPress={() => dropSalaried(!salaried)}
            />

            <CheckBox
              title="Self Employed"
              checked={selfemployed}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={() => dropSelfemployed(!selfemployed)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  insideBox: {
    alignItems: "center",
    marginTop: -470,
  },

  verticalBox: {
    position: "absolute",
    top: 84,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 348,
    height: 778,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 5,
  },

  flex_hcenter: {
    justifyContent: "center",
  },
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
  },

  mainHeader: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    textTransform: "capitalize",
  },

  button: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#28655e",
    width: 278,
    height: 61,
    marginLeft: 5,
  },

  button0: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#28655e",
    width: 278,
    height: 61,
    marginLeft: 5,

    
  },
  button1: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#28655e",
    width: 278,
    height: 61,
    marginLeft: 5,
  },
  button2: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#28655e",
    width: 278,
    height: 61,
    marginLeft: 5,
  },

  text: {
    // marginLeft: -50,
    padding: 10,
    fontFamily: "Montserrat",
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  text1: {
    marginLeft: -20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    fontFamily: "Montserrat",
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  text242: {
    fontSize: 18,
    width: 275,
    fontFamily: "Montserrat",
    fontWeight: 600,
    marginBottom: 7,
  },

  secondpart: {
    position: "absolute",
    width: 295,
    height: 320,
  },

  checkbox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginLeft: -1,
    padding: -17,
  },

  hidden: {
    position: "absolute",
    marginTop: 90,
  },

  hidden1: {
    position: "absolute",
    marginTop: 210,
  },


  salariedbuttons:{
    position:"relative",
    top:110
  }
});

export default EmploymentDetails;
