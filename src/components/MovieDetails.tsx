import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';

import { CastDetails } from './CastDetails';
import { SimilarMovieCard } from './SimilarMovieCard';
import { Spinner } from './Spinner';

import { MovieFullDetail } from '../interfaces/movie.interface';
import { Cast } from '../interfaces/credits.interface';
import { Movie } from '../interfaces/movies.interface';
import { movieDetailsStyles } from '../styles/MovieDetailsStyles';
import { useMovieTrailer } from '../hooks/useMovieTrailer';

import Icon from 'react-native-vector-icons/Octicons';
import 'intl';
import 'intl/locale-data/jsonp/en';
import YoutubePlayer from 'react-native-youtube-iframe';

const screenDimensions = Dimensions.get('window').height;

interface Props {
  movieFull: MovieFullDetail;
  cast: Cast[];
  similarMovies: Movie[];
}

export const MovieDetails = ({ movieFull, cast, similarMovies }: Props) => {

  const { vote_average, genres, overview, budget } = movieFull;
  const { trailerState, isLoading, trailersYoutubeList } = useMovieTrailer(movieFull.id);
  const trailerYoutubeKey = trailerState?.length ? trailerState[0].key : '';

  if (isLoading) return <Spinner />;

  return (
    <>
      <View style={movieDetailsStyles.detailsContainer}>

        {/* Details */}
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
      </View>

      {/* Casting */}
      <View style={movieDetailsStyles.castingContainer}>
        <Text style={{
          ...movieDetailsStyles.titlesDetails,
          marginLeft: 15
        }}>
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

      {/* Trailers */}
      {
        trailerState?.length &&
        (
          <View style={movieDetailsStyles.similarMoviesContainer}>
            <Text style={{
              ...movieDetailsStyles.titlesDetails,
              marginLeft: 15
            }}>
              Trailers
            </Text>

            <View style={{ flex: 1 }}>
              <YoutubePlayer
                videoId={trailerYoutubeKey}
                playList={trailersYoutubeList}
                height={screenDimensions * 0.30}
              />
            </View>
          </View>
        )
      }

      {/* Similar Movies */}
      <View style={movieDetailsStyles.similarMoviesContainer}>
        <Text style={{
          ...movieDetailsStyles.titlesDetails,
          marginLeft: 15
        }}>
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
    </>
  )
}