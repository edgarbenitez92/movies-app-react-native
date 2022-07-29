import { StyleSheet } from "react-native";

export const moviePosterStyles = StyleSheet.create({
  card: {
    width: 300,
    height: 420,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.65,
    shadowRadius: 7.49,
    elevation: 12,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  }
});