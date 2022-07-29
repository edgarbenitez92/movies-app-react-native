import { Dimensions, StyleSheet } from "react-native";

const { width: windowWidth } = Dimensions.get('window');

export const carouselStyles = StyleSheet.create({
  carousel: {
    width: windowWidth,
    justifyContent: 'center',
  }
});