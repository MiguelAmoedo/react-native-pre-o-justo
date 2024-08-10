import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    backgroundColor: '#7B22D3',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  updateButton: {
    backgroundColor: '#7B22D3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  updateButtonDisabled: {
    opacity: 0.6, 
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
