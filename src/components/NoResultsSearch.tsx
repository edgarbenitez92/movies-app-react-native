import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const NoResultsSearch = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/images/no-results.jpg')}
        style={styles.image}
      />

      <Text style={styles.descriptionResults}>
        No results
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10
  },
  descriptionResults: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold'
  }
});