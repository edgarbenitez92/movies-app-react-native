import { StyleSheet } from "react-native";

export const verticalSliderStyles = StyleSheet.create({
  sliderContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  movieTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
  },
  detailsContainer: {
    width: 250,
    height: 180,
  },
  movieDetails: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 5
  }
});