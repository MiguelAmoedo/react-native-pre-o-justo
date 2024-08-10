import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height,
  },
  topBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: "#7B22D3",
  },
  bottomBackground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "87%",
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    paddingTop: 60,
  },
  backButtonImage: {
    width: 75,
    height: 50,
    top: 6,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    right: 10,
  },
  shopText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    left: 40,
    marginTop: 40,
  },
  container: {
    padding: 10,
    paddingTop: 25, 
  },
  card: {
    width: width * 0.4, 
    height: 300,
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    left: 25,
    marginBottom: 20,
    marginHorizontal: 8, 
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 8,
    justifyContent: "space-between",
    height: "50%",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  quantity: {
    fontSize: 14,
    color: "#888",
  },
  lc: {
    fontSize: 14,

    top: 20,
    color: '#7B22D3',
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pricer: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#7B22D3',
  },
  marketIcon: {
    width: 40,
    height: 40,
    right: 10
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF", 
  },
  loadingImage: {
    width: 150, 
    height: 150, 
  },
});

export default styles;
