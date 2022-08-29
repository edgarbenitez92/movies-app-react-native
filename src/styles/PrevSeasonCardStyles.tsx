import { StyleSheet } from "react-native";

export const prevSeasonCardStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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
  seasonTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    width: 200,
    textAlign: 'center'
  }
});