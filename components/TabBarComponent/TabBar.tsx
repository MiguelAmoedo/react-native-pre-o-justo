import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './Style'; 

const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

 
  const icons = {
    home: require('../../assets/Home.png'),
    bag: require('../../assets/bag.png'),
    account: require('../../assets/account.png'),
  };

 
  const [selected, setSelected] = React.useState(route.name || 'Home');


  const handlePress = (screen: string) => {
    setSelected(screen);
    navigation.navigate(screen); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('Home')}
      >
        <Image
          source={icons.home}
          style={[styles.icon, selected === 'Home' && styles.selectedIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('Bag')}
      >
        <Image
          source={icons.bag}
          style={[styles.icon, selected === 'Bag' && styles.selectedIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('Profile')}
      >
        <Image
          source={icons.account}
          style={[styles.icon, selected === 'Profile' && styles.selectedIcon]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;
