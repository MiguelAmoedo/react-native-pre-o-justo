import React, { useState, useCallback } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import AuthService from 'services/AuthServices';
import styles from './Style';
import { useFonts, Sora_400Regular, Sora_700Bold } from '@expo-google-fonts/sora';

const RegisterScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = useCallback(async () => {
    setLoading(true);
    try {
      const formData = { name, email, password };
      const response = await AuthService.register(formData);

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
        navigation.navigate('Login'); 
      } else {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar realizar o cadastro');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar realizar o cadastro');
    } finally {
      setLoading(false);
    }
  }, [name, email, password, navigation]);

  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topHalf} />
      <View style={styles.bottomHalf} />

      <View style={styles.content}>
      
      
        <Text style={styles.subtitleText}>Registrar</Text>

        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/profileLogin.png')}
            style={styles.inputIcon}
            accessibilityLabel="Ícone de nome"
          />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#000"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            accessibilityLabel="Campo de nome"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/profileLogin.png')}
            style={styles.inputIcon}
            accessibilityLabel="Ícone de e-mail"
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#000"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            accessibilityLabel="Campo de e-mail"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/lock.png')}
            style={styles.inputIcon}
            accessibilityLabel="Ícone de senha"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#000"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            accessibilityLabel="Campo de senha"
          />
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
          disabled={loading}
          accessibilityLabel="Botão de registro"
        >
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.registerButtonText}>Registrar</Text>
          )}
        </TouchableOpacity>

        <View>
          <Text style={styles.codeText}  onPress={() => navigation.goBack()}>Já possui uma conta? Faça login</Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
