import { StyleSheet } from "react-native";

export const moviePosterStyles = StyleSheet.create({
  card: {
    width: 300,
    height: 420,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7.49,
    elevation: 12,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  }
});