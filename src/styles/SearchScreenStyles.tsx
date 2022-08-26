import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const searchScreenStyles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    marginHorizontal: 8,
    marginTop: 20,
  },
  searchInput: {
    position: 'absolute',
    zIndex: 999,
    width: screenWidth - 40,
  },
  footerTitle: {
    fontSize: 18,
    color: 'black'
  },
  footerContainer: {
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10
  },
  textInput: {
    flex: 1,
    fontSize: 18
  }
});