import { Dimensions, StyleSheet } from "react-native";

const screenHeight = Dimensions.get('window').height;


export const detailStyles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20
  },
  posterImage: {
    flex: 1
  },
  titlesContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  returnButton: {
    position: 'absolute',
    top: 30,
    left: 20
  }
});