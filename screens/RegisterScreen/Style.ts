import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  topHalf: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#7B22D3',
  },
  bottomHalf: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '65%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#F9F9F9',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    top: 80
  
  },
  walletImage: {
    width: 96,
    height: 95,
    marginBottom: 20,
    opacity: 0.5,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 30,
    opacity: 0.5,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 24,
    fontWeight: 'bold',
    backgroundColor: '#313131',
    textAlign: 'center',
    marginBottom: 90,
    
  },
  subtitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 24,
    height: 85,
    marginBottom: 35,
    paddingHorizontal: 20,
    elevation: 1,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    borderRadius: 24,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  registerButton: {
    backgroundColor: '#7B22D3',
    borderRadius: 35,
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginBottom: 20,
    top: 20,
  },
  registerButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  codeText: {
    fontSize: 13,
    color: '#9B9B9B',
    marginTop: 10,
    textAlign: 'center',
    top: 60,
  },
});

export default styles;
