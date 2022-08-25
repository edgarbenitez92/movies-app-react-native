import { StyleSheet } from "react-native";

export const topRatedSelectionStyles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.3
  },
  selectionContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  topRatedButton: {
    backgroundColor: '#5856D6',
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topRatedButtonTitle: {
    color: '#DEDCDC',
    fontSize: 18,
    fontWeight: 'bold'
  }
});