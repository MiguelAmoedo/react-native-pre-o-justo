import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from "./Style"; 

interface AlertCardProps {
  mainText: string;
  subText: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ mainText, subText }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.mainText}>{mainText}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </View>
  );
};


export default AlertCard;
