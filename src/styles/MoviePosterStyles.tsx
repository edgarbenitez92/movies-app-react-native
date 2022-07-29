import { StyleSheet } from "react-native";

export const moviePosterStyles = StyleSheet.create({
  card: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 5
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  },
  image: {
    flex: 1,
    borderRadius: 18,
  }
});