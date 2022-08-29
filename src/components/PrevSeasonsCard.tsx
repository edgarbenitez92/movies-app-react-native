import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { prevSeasonCardStyles } from '../styles/PrevSeasonCardStyles';

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