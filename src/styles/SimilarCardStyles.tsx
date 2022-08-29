import { StyleSheet } from "react-native";

export const similarCardStyle = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    marginHorizontal: 5,
    paddingBottom: 20,
    paddingHorizontal: 5,
    height: 300,
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
    width: 215,
    height: 300,
    borderRadius: 18,
  },
});