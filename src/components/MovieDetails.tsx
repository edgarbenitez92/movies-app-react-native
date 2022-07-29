import React from 'react';
import { Text, View } from 'react-native';
import { Cast } from '../interfaces/credits.interface';
import { MovieFullDetail } from '../interfaces/movie.interface';

import Icon from 'react-native-vector-icons/Octicons';
import currencyFormatter from 'currency-formatter';
import { movieDetailsStyles } from '../styles/MovieDetailsStyles';
import 'intl';
import 'intl/locale-data/jsonp/en';

interface Props {
  movieFull: MovieFullDetail;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {

  let { vote_average, genres, overview, budget } = movieFull;

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
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginBottom: 5 }}>
          History
        </Text>

        <Text style={{ fontSize: 16 }}>{overview}</Text>

        {/* Budget */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginBottom: 5 }}>
          Budget
        </Text>

        {/* <Text style={{ fontSize: 16 }}>{currencyFormatter.format(budget, { code: 'USD' })}</Text> */}
        <Text> {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(budget)}</Text>
      </View>

      {/* Casting */}
    </>
  )
}
