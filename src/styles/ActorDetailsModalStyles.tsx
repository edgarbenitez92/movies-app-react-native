import { StyleSheet } from "react-native";

export const actorDetailsModalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: 'white',
    width: 350,
    height: 280,
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 7
  },
  actorPhoto: {
    height: 280,
    flex: 1,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7
  },
  buttonCloseModal: {
    alignItems: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 10
  },
  detailContainer: {
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  titleDetail: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  descriptionDetail: {
    fontSize: 14,
    fontWeight: '500'
  }
});