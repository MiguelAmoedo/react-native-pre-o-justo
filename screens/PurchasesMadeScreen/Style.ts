import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  container: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 16,
    overflow: "hidden",
    transform: [{ scale: 1 }],
    
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: width - 32,
    height: 200,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: "#666666",
  },
});

export default styles;
