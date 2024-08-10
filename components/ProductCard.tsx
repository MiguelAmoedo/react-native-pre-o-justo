import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Product = () => {
  const [isPurchased, setIsPurchased] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsPurchased(true);
      
    }, 2000); 
  };

  return (
    <View style={styles.container}>
      {/* Metade superior: imagem */}
      <Image
        source={{ uri: 'https://www.havan.com.br/media/catalog/product/n/o/notebook-positivo-intel-dual-core-4gb-ram-128gb-tela-de-15-6-w11_854366.jpg' }}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.productName}>Notebook</Text> 
        <Text style={styles.quantity}>40 unidades</Text> 
        <Text style={styles.lc}>Lc</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.pricer}>4000</Text>
          <TouchableOpacity onPress={handlePurchase}>
            <Image
              source={isPurchased
                ? require('../assets/purchased.png') 
                : isLoading
                ? require('../assets/loading.gif') 
                : require('../assets/market.png')
              }
              style={styles.marketIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 165, 
    height: 233, 
    borderRadius: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowRadius: 4, 
    elevation: 2, 
    top: 280,
    left: 10,
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover', 
  },
  infoContainer: {
    padding: 8,
    justifyContent: 'space-between',
    height: '50%',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', 
  },
  quantity: {
    fontSize: 14,
    color: '#888',
  },
  lc: {
    fontSize: 14,
    color: '#7B22D3',
    top: 10
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pricer: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7B22D3', 
  },
  marketIcon: {
    width: 40,
    height: 40,
  },
});

export default Product;
