import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 384,
    height: 85,
    borderRadius: 24,
    alignItems: "center",
    top: 30,
    left: 20,
    right: 0,
    padding: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 4, 
    elevation: 5, 
    position: 'absolute',
  },
  mainText: {
    fontSize: 16,
    color: '#2F2D2C',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 10,
    color: '#9B9B9B',
  },
});

export default styles;
