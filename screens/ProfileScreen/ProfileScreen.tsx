import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from './Styles'; 

const ProfileScreen = ({ loginResponse }) => {
  const navigation = useNavigation(); 


  const goToDataScreen = () => {
    navigation.navigate('Data'); 
  };

  const Exit = () => {
    navigation.navigate('Login'); 
  };

  const PushareMade = () => {
    navigation.navigate('Pushare'); 
  };


  return (
    <View style={styles.container}>
      <View style={styles.topHalf} />
      <View style={styles.bottomHalf} />

      {/* Foto de Perfil */}
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1022313202/pt/foto/beautiful-women-face-portrait-close-up-and-tree-background.jpg?s=1024x1024&w=is&k=20&c=tOlEiDSfCYyDjcS32fVewn30LJ1q7tOzr8ONZkoy4K8=' }}
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>
        Mary
      </Text>

      {/* Botão Editar Perfil */}
      <TouchableOpacity style={styles.editProfileButton} onPress={goToDataScreen}>
        <Text style={styles.editProfileText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Botões de Opções */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={goToDataScreen}>
          <Image source={require('../../assets/profile.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Detalhes do Perfil</Text>
          <Image source={require('../../assets/direction.png')} style={styles.optionArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Image source={require('../../assets/accoutDetails.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Detalhes da Conta</Text>
          <Image source={require('../../assets/direction.png')} style={styles.optionArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}  onPress={PushareMade}>
          <Image source={require('../../assets/historic.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Histórico</Text>
          <Image source={require('../../assets/direction.png')} style={styles.optionArrow} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.exitButton} onPress={Exit}>
        <Text style={styles.exitText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
