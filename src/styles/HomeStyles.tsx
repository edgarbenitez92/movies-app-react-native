import { Dimensions, StyleSheet } from "react-native";

const { width: windowWidth } = Dimensions.get('window');

export const homeStyles = StyleSheet.create({
  carouselContainer: {
    height: 440
  },
  carousel: {
    width: windowWidth,
    justifyContent: 'center',
  }
});