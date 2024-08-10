import React, { useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import AuthService from 'services/AuthServices';
import styles from './Style';
import {
  useFonts,
  Sora_400Regular,
  Sora_700Bold,
} from '@expo-google-fonts/sora';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(async () => {
    setLoading(true);
    try {
      const formData = { email, password };
      const response = await AuthService.login(formData);

      if (response.status === 200) {
        navigation.navigate('HomeTabs', { loginResponse: response.data });
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar realizar o login');
    } finally {
      setLoading(false);
    }
  }, [email, password, navigation]);

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
        <Image
          source={require('../../assets/Wallet.png')}
          style={styles.walletImage}
        />
        <Text style={styles.titleText}>Shopping Coins</Text>
        <Text style={styles.subtitleText}>Login</Text>

        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/profileLogin.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#000"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/lock.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#000"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.loginButtonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <View>
          <Text style={styles.codeText}>Registrar-se | Resetar senha</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
