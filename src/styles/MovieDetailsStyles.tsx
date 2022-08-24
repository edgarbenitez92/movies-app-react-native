import { StyleSheet } from "react-native";

export const movieDetailsStyles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20
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
  budgetDetail: {
    fontSize: 16
  },
  castingContainer: {
    marginTop: 10,
    marginBottom: 100
  },
  swiperContainer: {
    marginTop: 10,
    height: 70
  }
});