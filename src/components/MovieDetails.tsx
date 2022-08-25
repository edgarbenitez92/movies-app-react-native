import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Cast } from '../interfaces/credits.interface';
import { CastDetails } from './CastDetails';
import { MovieFullDetail } from '../interfaces/movie.interface';
import { movieDetailsStyles } from '../styles/MovieDetailsStyles';
import Icon from 'react-native-vector-icons/Octicons';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { Movie } from '../interfaces/movies.interfaces';
import { useNavigation } from '@react-navigation/native';
import { SimilarMovieCard } from './SimilarMovieCard';

interface Props {
  movieFull: MovieFullDetail;
  cast: Cast[];
  similarMovies: Movie[];
}

export const MovieDetails = ({ movieFull, cast, similarMovies }: Props) => {

  const { vote_average, genres, overview, budget } = movieFull;
  const navigation = useNavigation<any>();

  return (
    <>
      {/* Details */}
      <View style={movieDetailsStyles.detailsContainer}>

        <View style={movieDetailsStyles.rateContainer}>
          <Icon name='star' color='grey' size={16} />
          <Text style={movieDetailsStyles.rateDetails}>{vote_average}</Text>

          <Text style={movieDetailsStyles.rateDetails}>
            - {genres.map(gene => gene.name).join(', ')}
          </Text>
        </View>

        {/* History */}
        <Text style={movieDetailsStyles.titlesDetails}>
          History
        </Text>

        <Text style={movieDetailsStyles.historyDetail}>
          {overview}
        </Text>

        {/* Budget */}
        <Text style={movieDetailsStyles.titlesDetails}>
          Budget
        </Text>
        <Text style={movieDetailsStyles.budgetDetail}>
          {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(budget)}
        </Text>

        {/* Casting */}
        <View style={movieDetailsStyles.castingContainer}>
          <Text style={movieDetailsStyles.titlesDetails}>
            Actors
          </Text>

          <FlatList
            style={movieDetailsStyles.swiperContainer}
            data={cast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CastDetails actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Similar Movies */}
        <View style={movieDetailsStyles.similarMoviesContainer}>
          <Text style={movieDetailsStyles.titlesDetails}>
            Similar Movies
          </Text>

          <FlatList
            data={similarMovies}
            keyExtractor={(movie) => movie.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={(({ item }) => (
              <SimilarMovieCard movie={item} />
            ))}
          />
        </View>
      </View>

    </>
  )
}