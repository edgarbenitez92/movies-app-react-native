import React from 'react';
import { Text, View } from 'react-native';
import { Cast } from '../interfaces/credits.interface';
import { MovieFullDetail } from '../interfaces/movie.interface';
import Icon from 'react-native-vector-icons/Octicons'

interface Props {
  movieFull: MovieFullDetail;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {

  let { vote_average, genres, overview, budget } = movieFull;

  return (
    <>
      {/* Details */}
      <View style={{ marginHorizontal: 20 }}>

        <View style={{ flexDirection: 'row' }}>
          <Icon name='star' color='grey' size={16} />
          <Text style={{ marginLeft: 10 }}>{vote_average}</Text>

          <Text style={{ marginLeft: 5 }}>
            - {genres.map(gene => gene.name).join(', ')}
          </Text>
        </View>

        {/* History */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          History
        </Text>

        <Text style={{ fontSize: 16 }}>{overview}</Text>

        {/* Budget */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Budget
        </Text>

        <Text style={{ fontSize: 16 }}>{budget}</Text>
      </View>

      {/* Casting */}
    </>
  )
}
