import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import WalletHome from "components/WalletComponent/HomeValue";
import TravelHome from "components/TravelComponent/TravelHome";
import ProductCard from "components/ProductCard"; 
import styles from "./Style"; 
import { useNavigation } from '@react-navigation/native';
import AlertCard from "components/AlertComponent/AlertCard";

const travelPackages = [
  {
    id: "1",
    title: "Pacote ACAPULCO",
    location: "Guerrero - México",
    price: "Lc 50.000",
    image: require("../../assets/travelPhoto.png"),
  },
  {
    id: "2",
    title: "Pacote PARIS",
    location: "França",
    price: "Lc 70.000",
    image: require("../../assets/travelPhoto.png"),
  },
  {
    id: "3",
    title: "Pacote TÓQUIO",
    location: "Japão",
    price: "Lc 80.000",
    image: require("../../assets/travelPhoto.png"),
  },
];

const HomeScreen = ({ loginResponse }) => {
  const navigation = useNavigation();
  const [alertText, setAlertText] = useState(null);

  const handleProductClick = (productName) => {
    setAlertText({
      mainText: `O ${productName} está à caminho! 🥳`,
      subText: '🎁 Parabéns, sua compra foi confirmada!',
    });
  };

  
  const MoreProducts = () => {
    navigation.navigate('Bag'); 
  };


  return (
    <View style={styles.container}>
      <View style={styles.topHalf} />
      <View style={styles.bottomHalf} />

      <View style={styles.contentContainer}>
        <View style={styles.row}>
          <Image source={require("../../assets/girl.png")} style={styles.image} />
          <Text style={styles.text}>Shopping Coins</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.mary}>Olá, {loginResponse.user.name}</Text>
          <Image
            source={require("../../assets/Notification.png")}
            style={styles.imageNotifi}
          />
        </View>

        <View style={styles.componentsContainer}>
          <WalletHome loginResponse={loginResponse} />

          {/* Carrossel de Pacotes de Viagem */}
          <View style={styles.carouselWrapper}>
            <FlatList
              data={travelPackages}
              renderItem={({ item }) => (
                <TravelHome
                  title={item.title}
                  location={item.location}
                  price={item.price}
                  image={item.image}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.carouselContainer}
            />
          </View>

          <View style={styles.productsRow}>
            <ProductCard onPress={() => handleProductClick('Produto 1')} />
            <ProductCard onPress={() => handleProductClick('Produto 2')} />
          </View>
        </View>

        <TouchableOpacity style={styles.button}  onPress={MoreProducts}>
          <Text style={styles.buttonText}>Ver todos os produtos</Text>
        </TouchableOpacity>

        {alertText && <AlertCard {...alertText} />}
      </View>
    </View>
  );
};

export default HomeScreen;
