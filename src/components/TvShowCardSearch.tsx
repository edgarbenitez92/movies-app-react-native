import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { TvShow } from '../interfaces/tvShows.interface';
import { FadeInImage } from './FadeInImage';

interface Props {
  tvShowsFiltered: TvShow[];
}

export const TvShowCardSearch = ({ tvShowsFiltered }: Props) => {
  return (
    <FlatList
      data={tvShowsFiltered}
      keyExtractor={(movie) => movie.id.toString()}
      showsVerticalScrollIndicator={false}
      numColumns={2}

      renderItem={(({ item }) => (
        <View style={styles.imageContainer}>
          {
            (item.poster_path)
              ? (
                <FadeInImage
                  uri={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  style={styles.image}
                />
              )
              : (
                <Image
                  source={require('../assets/images/no-movie.jpg')}
                  style={styles.image}
                />
              )
          }
        </View>
      ))}
    />
  )
}


const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 5,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 180,
    height: 250,
    borderRadius: 10
  }
});