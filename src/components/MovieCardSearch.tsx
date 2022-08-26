import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movies.interface';
import { FadeInImage } from './FadeInImage';

interface Props {
  moviesFiltered: Movie[];
}

export const MovieCardSearch = ({ moviesFiltered }: Props) => {
  return (
    <FlatList
      data={moviesFiltered}
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