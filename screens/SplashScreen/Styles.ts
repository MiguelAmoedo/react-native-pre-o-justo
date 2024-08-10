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
    backgroundColor: '#8000ff',
    opacity: 0.6,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -3 // Adicionado para garantir que a sobreposição cubra toda a tela
  },
  icon: {
    width: 96,
    height: 95,
  },
  text: {
    color: "#fff",
    fontSize: 28,
    marginTop: 30,
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 24,
    fontWeight: 'bold',
    backgroundColor: "#313131",
    textAlign: "center",
    zIndex: -3, // Garantir que o texto esteja na camada superior
  },
});

export default styles;
