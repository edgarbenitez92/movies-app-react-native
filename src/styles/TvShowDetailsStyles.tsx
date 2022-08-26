import { StyleSheet } from "react-native";

export const tvShowDetailsStyles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20,
  },
  rateContainer: {
    flexDirection: 'row'
  },
  rateDetails: {
    marginLeft: 5
  },
  titlesDetails: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  },
  historyDetail: {
    fontSize: 16,
  },
  productionDetailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    marginTop: 5
  },
  productionDetailDescription: {
    fontSize: 16,
    marginTop: 5
  },
  castingContainer: {
    marginTop: 10,
  },
  similarMoviesContainer: {
    marginBottom: 10
  },
  swiperContainer: {
    marginTop: 10,
    height: 70
  }
});