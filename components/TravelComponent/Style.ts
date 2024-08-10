import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 120,
    backgroundColor: '#7B22D3',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    elevation: 4,
  },
  image: {
    width: '50%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
