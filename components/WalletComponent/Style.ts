import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 75,
    backgroundColor: '#fff',
    borderColor: '#ccc', 
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    position: 'absolute',
    top: 10,
    left: 15,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 3,
  },
  separator: {
    width: 1,
    height: '100%',
    marginLeft: 30,
    backgroundColor: '#ccc', 
  },
  image: {
    width: 24,
    height: 24,
    paddingLeft: 10,
    marginLeft: 10, 
  },
  imageWallet: {
    width: 24,
    height: 24,
    paddingLeft: 10,
    marginLeft: 40, 
  },
  shopText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginLeft: 10, 
  },
});

export default styles;
