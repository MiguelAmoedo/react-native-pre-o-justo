import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import AuthService from 'services/AuthServices'; 
import styles from './ProfileDataStyles'; 

const ProfileData = ({ loginResponse }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    balance: '',
    registrationDate: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loginResponse?.user) {
      setUserData({
        name: loginResponse.user.name || '',
        email: loginResponse.user.email || '',
        balance: loginResponse.user.balance || '',
        registrationDate: loginResponse.user.registrationDate || '',
      });
    }
  }, [loginResponse]);

  const formatBalance = (balance) => {
    if (balance === undefined || balance === null) return '';
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const formatDate = (date) => {
    if (!date) return '';
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  };

  const handleUpdate = async () => {
    setLoading(true); 

    try {
      const { id } = loginResponse.user;
      const response = await AuthService.putUser(id, {
        name: userData.name,
        email: userData.email,
        balance: parseFloat(userData.balance.replace(/\./g, '').replace(',', '.')),
        registrationDate: userData.registrationDate,
      });

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      } else {
        Alert.alert('Erro', 'Não foi possível atualizar os dados.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao atualizar os dados.');
    } finally {
      setLoading(false); 
    }
  };

  const handleInputChange = (field, value) => {
    setUserData(prevState => ({ ...prevState, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={userData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={userData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        
        <Text style={styles.label}>Saldo</Text>
        <TextInput
          style={styles.input}
          value={userData.balance}
          onChangeText={(text) => handleInputChange('balance', text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Data de Registro</Text>
        <Text style={styles.value}>{formatDate(userData.registrationDate)}</Text>

        <TouchableOpacity 
          style={[styles.updateButton, loading && styles.updateButtonDisabled]} 
          onPress={handleUpdate}
          disabled={loading} 
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" /> 
          ) : (
            <Text style={styles.updateButtonText}>Atualizar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileData;
