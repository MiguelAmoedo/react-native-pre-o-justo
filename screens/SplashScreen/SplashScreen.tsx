import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import styles from "./Styles"; 

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
   
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);

  
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require("../../assets/background.png")} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Image
          source={require("../../assets/Wallet.png")} 
          style={styles.icon}
        />
        <Text style={styles.text}>Shopping Coins</Text>
      </View>
    </ImageBackground>
  );
};



export default SplashScreen;
