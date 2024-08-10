import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor: "rgba(123, 34, 211, 0.5)",
    width: "100%",
    height: "100%", 
  },
  icon: {
    width: 96,
    height: 95,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: "#313131", // Cor do fundo do texto
    textAlign: "center",
  },
});

export default styles;
