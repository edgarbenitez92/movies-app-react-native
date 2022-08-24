import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MoviePoster } from '../components/MoviePoster';
import { Spinner } from '../components/Spinner';
import { useTopRatedMovie } from '../hooks/useTopRatedMovie';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

export const TopRatedScreen = () => {

  const { topRated, isLoading } = useTopRatedMovie();
  const { navigate } = useNavigation<any>();

  if (isLoading) return <Spinner />;

  return (
    <View style={verticalSliderStyles.topRatedContainer}>

      <View style={{ marginBottom: 10 }} />

      <FlatList
        data={topRated}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('DetailScreen', item)}
          >

            <View style={verticalSliderStyles.sliderContainer}>
              <MoviePoster movie={item} width={140} height={200} />

              <View style={verticalSliderStyles.detailsContainer}>

                {/* Movie title */}
                <Text style={verticalSliderStyles.movieTitle}>
                  {index + 1}.- {item.title}
                </Text>

                {/* Movie rated */}
                <Text style={{
                  ...verticalSliderStyles.movieDetails,
                  marginTop: 15
                }}>
                  Rated: <Icon name='star' color='grey' size={16} /> {item.vote_average}
                </Text>

                {/* Movie Voters */}
                <Text style={verticalSliderStyles.movieDetails}>
                  N° voters: {item.vote_count}
                </Text>

                {/* Release date */}
                <Text style={verticalSliderStyles.movieDetails}>
                  Release date: {item.release_date}
                </Text>

                {/* Popularity */}
                <Text style={verticalSliderStyles.movieDetails}>
                  Popularity:  {item.popularity}
                </Text>

                {/* Genres */}
                <Text style={verticalSliderStyles.movieDetails}>
                  Genre: {item.genre_ids[0]}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export const verticalSliderStyles = StyleSheet.create({
  topRatedContainer: {
    flex: 1,
    backgroundColor: '#DEDCDC'
  },
  sliderContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  movieTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
  },
  detailsContainer: {
    width: 250,
    height: 180,
  },
  movieDetails: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 5
  }
});