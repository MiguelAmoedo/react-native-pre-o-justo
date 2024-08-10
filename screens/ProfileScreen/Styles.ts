import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topHalf: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: '#7B22D3',
  },
  bottomHalf: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#F9F9F9',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: 'rgba(248, 248, 248, 0.5)',  
    marginBottom: 20,
    marginTop: 70,
  },
  nameText: {
    fontWeight: "bold",
    paddingBottom: 30,
    paddingTop: 10,
    fontSize: 18,
    color: '#fff',
  },
  editProfileButton: {
    backgroundColor: '#313131',
    paddingVertical: 17,
    paddingHorizontal: 30,
    borderRadius: 24,
    marginBottom: 30,
  },
  editProfileText: {
    fontSize: 15,
    color: '#fff',
  },
  optionsContainer: {
    width: 370,
    fontWeight: "bold",
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 1,
    paddingHorizontal: 24,
    borderRadius: 24,
    height: 95,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#ffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    top: 35
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  optionText: {
    flex: 1,
    fontSize: 18,
    color: '#313131',
    marginLeft: 16,
    fontWeight: "bold",
  },
  optionArrow: {
    width: 18,
    height: 18,
    tintColor: '#545454',
  },
  exitButton: {
    backgroundColor: '#7B22D3',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 24,
    marginBottom: 30,
    top: 65,
  },
  exitText: {
    fontSize: 24,
    color: '#fff',
    textAlign: "center",
  }
});

export default styles;
