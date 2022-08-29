import { StyleSheet } from "react-native";


export const castDetailsStyles = StyleSheet.create({
  castContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginHorizontal: 15,
    paddingRight: 15,
    height: 50
  },
  actorPhoto: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  actorInfoContainer: {
    marginLeft: 10,
    marginTop: 3
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  actorCharacterName: {
    fontSize: 16,
    opacity: 0.7
  }
});