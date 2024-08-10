import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  topHalf: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "45%",
    backgroundColor: "#7B22D3",
  },
  bottomHalf: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "75%",
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  contentContainer: {
    flex: 1,
    padding: 30,
    paddingTop: 40,
    zIndex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  image: {
    width: 90,
    height: 70,
  },
  imageNotifi: {
    width: 24,
    height: 25,
    right: 10,
  },
  text: {
    fontSize: 18,
    borderRadius: 24,
    backgroundColor: "#313131",
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: "#fff",
  },
  mary: {
    fontSize: 18,
    paddingHorizontal: 20,
    color: "#fff",
  },
  componentsContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  carouselWrapper: {
    position: "absolute",
    top: 130, 
    width: '100%',
    height: 150,
    zIndex: 1,
  },
  carouselContainer: {
    paddingVertical: 20,
  },
  productsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#7B22D3",
    borderRadius: 24,
    paddingVertical: 15,
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 20,
    width: '75%',
    left: 55
  },
  buttonText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },
});

export default styles;
