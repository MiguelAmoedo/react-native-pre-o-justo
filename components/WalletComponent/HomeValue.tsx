import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from "./Style"; 

const WalletHome = ({   loginResponse}) => {

 

  const formatBalance = (balance) => {
    if (!balance && balance !== 0) return ''; 
  
   
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    
    <View style={styles.container}>
      <Image source={require('../../assets/walletHome.png')} style={styles.image} />
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>Lc</Text>
        <Text style={styles.amount}>
        {formatBalance(loginResponse?.user?.balance)}
          </Text>
      </View>
      <View style={styles.separator} />
      <Image source={require('../../assets/shopping.png')} style={styles.imageWallet} />
      <Text style={styles.shopText}>Shop</Text>
    </View>
  );
};

export default WalletHome;
