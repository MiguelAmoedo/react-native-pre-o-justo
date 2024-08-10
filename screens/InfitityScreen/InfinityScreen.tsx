import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Alert,
  TouchableOpacity,
  LogBox,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AlertCard from "components/AlertComponent/AlertCard";
import ProductService from "services/ProductService";
import PurchaseService from "services/PurchaseServices";
import styles from "./InfinityScreenStyles";

const { width, height } = Dimensions.get("window");
LogBox.ignoreLogs(['Warning: Encountered two children with the same key']);

const InfinityScreen = ({ loginResponse }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState({ mainText: "", subText: "" });
  const [loadingProduct, setLoadingProduct] = useState(null); 
  const [completedPurchase, setCompletedPurchase] = useState(null); 
  const navigation = useNavigation();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await ProductService.getAll();
      const newProducts = response.data.map((product) => ({
        id: product._id,
        name: product.nome,
        quantity: product.quantidade,
        price: product.preco,
        image: product.imagem,
      }));

      const uniqueProducts = Array.from(
        new Map(newProducts.map((product) => [product.id, product])).values()
      );
      setProducts((prevProducts) => [...prevProducts, ...uniqueProducts]);
      setHasMore(newProducts.length > 0);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [page, fetchProducts]);

  const handlePurchase = async (productId, price, productName) => {
    setLoadingProduct(productId); 

    try {
      await PurchaseService.create({
        userId: loginResponse.user.id,
        productId: productId,
        quantity: 1,
        totalPaid: price,
      });

      setAlertText({
        mainText: `O ${productName} está à caminho! 🥳`,
        subText: "🎁 Parabéns, sua compra foi confirmada!",
      });
      setShowAlert(true);
      setTimeout(() => {
        setLoadingProduct(null); 
        setCompletedPurchase(productId); 
      }, 1500);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);

    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to complete the purchase");
      setLoadingProduct(null); 
    }
  };

  const renderItem = useCallback(({ item }) => {
    if (!item.id) {
      return null;
    }

    const isLoading = loadingProduct === item.id;
    const isPurchased = completedPurchase === item.id;

    const imageSource = isPurchased
      ? require("../../assets/purchased.png") 
      : isLoading
      ? require("../../assets/loading.gif") 
      : require("../../assets/market.png"); 

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.quantity}>{item.quantity} Unidades</Text>
          <Text style={styles.lc}>Lc</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.pricer}>{item.price}</Text>
            <TouchableOpacity
              onPress={() => handlePurchase(item.id, item.price, item.name)}
            >
              <Image
                source={imageSource}
                style={styles.marketIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }, [loadingProduct, completedPurchase, loginResponse]);

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore, loading]);

  const keyExtractor = useCallback((item) => `${item.id}-${item.name}`, []);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.backgroundContainer}>
        <View style={styles.topBackground} />
        <View style={styles.bottomBackground} />
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../assets/return.png")}
          style={styles.backButtonImage}
        />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.shopText}>Shop</Text>
      {showAlert && (
        <AlertCard mainText={alertText.mainText} subText={alertText.subText} />
      )}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
        contentContainerStyle={styles.container}
        numColumns={2}
      />
    </View>
  );
};

export default React.memo(InfinityScreen);
