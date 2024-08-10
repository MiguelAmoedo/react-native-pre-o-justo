import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Alert, Dimensions, StyleSheet } from "react-native";
import PurchaseService from "services/PurchaseServices";
import styles from "./Style";

const { width } = Dimensions.get("window");

const PurchasesMadeScreen = ({ loginResponse }) => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPurchases = useCallback(async () => {
    try {
      const response = await PurchaseService.getAll();
      const newPurchases = response.data.map((purchase) => ({
        id: purchase._id,
        productId: purchase.productId._id,
        name: purchase.productId.nome,
        description: purchase.productId.descricao,
        image: purchase.productId.imagem,
      }));
      setPurchases(newPurchases);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to fetch purchases");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPurchases();
  }, [fetchPurchases]);

  const handlePress = (product) => {
    Alert.alert(product.name, product.description);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Compras Realizadas</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={purchases}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default PurchasesMadeScreen;
