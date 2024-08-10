import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from "./Style"; 

const TravelHome = ({ title, location, price, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{location}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};


export default TravelHome;
