import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  poster_path: string;
  season_name: string;
  season_number: number;
}

export const PrevSeasonsCard = ({ poster_path, season_name, season_number }: Props) => {
  return (
    <View style={prevSeasonCardStyles.cardContainer}>
      <View style={prevSeasonCardStyles.card}>
        <View style={prevSeasonCardStyles.imageContainer}>
          <Image
            source={
              (poster_path)
                ? { uri: `https://image.tmdb.org/t/p/original/${poster_path}` }
                : require('../assets/images/no-movie.jpg')
            }
            style={prevSeasonCardStyles.image}
          />
        </View>

      </View>
      <Text style={prevSeasonCardStyles.seasonTitle}>
        Season {season_number + 1}: {season_name}
      </Text>
    </View>
  )
}


const prevSeasonCardStyles = StyleSheet.create({
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