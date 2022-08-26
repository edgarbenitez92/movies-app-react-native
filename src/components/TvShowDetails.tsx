import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';

import { CastDetails } from './CastDetails';
import { SimilarCard } from './SimilarCard';
import { Spinner } from './Spinner';

import { useTvShowTrailer } from '../hooks/useTvShowTrailer';
import { tvShowDetailsStyles } from '../styles/TvShowDetailsStyles';

import { Cast } from '../interfaces/credits.interface';
import Icon from 'react-native-vector-icons/Octicons';
import { TvShowFullDetails } from '../interfaces/tvShow.interface';
import { TvShow } from '../interfaces/tvShows.interface';

import 'intl';
import 'intl/locale-data/jsonp/en';
import YoutubePlayer from 'react-native-youtube-iframe';

const screenDimensions = Dimensions.get('window').height;

interface Props {
  tvShowFull: TvShowFullDetails;
  cast: Cast[];
  similarTvShows: TvShow[];
}

export const TvShowDetails = ({ tvShowFull, cast, similarTvShows }: Props) => {

  const {
    vote_average,
    genres,
    overview,
    in_production,
    first_air_date,
    last_air_date,
    last_episode_to_air,
    next_episode_to_air,
    number_of_seasons,
    number_of_episodes
  } = tvShowFull;

  const { trailerState, isLoading, trailersYoutubeList } = useTvShowTrailer(tvShowFull.id);
  const trailerYoutubeKey = trailerState?.length ? trailerState[0].key : '';
  const isActorsDataExist = cast.length ? true : false;

  if (isLoading) return <Spinner />;

  return (
    <>
      <View style={tvShowDetailsStyles.detailsContainer}>

        {/* Details */}
        <View style={tvShowDetailsStyles.rateContainer}>
          <Icon name='star' color='grey' size={16} />

          <Text style={tvShowDetailsStyles.rateDetails}>{vote_average}</Text>

          <Text style={tvShowDetailsStyles.rateDetails}>
            - {genres.map(gene => gene.name).join(', ')}
          </Text>
        </View>

        {/* Production */}
        <Text style={tvShowDetailsStyles.titlesDetails}>
          Production
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <Text style={tvShowDetailsStyles.productionDetailTitle}>
            Status:
          </Text>
          {
            in_production
              ? (
                <Text style={tvShowDetailsStyles.productionDetailDescription}>
                  In broadcast
                </Text>
              )
              : (
                <Text style={tvShowDetailsStyles.productionDetailDescription}>
                  Finalized
                </Text>
              )
          }
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={tvShowDetailsStyles.productionDetailTitle}>
            Seasons:
          </Text>
          <Text style={tvShowDetailsStyles.productionDetailDescription}>
            {number_of_seasons}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={tvShowDetailsStyles.productionDetailTitle}>
            Total episodes:
          </Text>
          <Text style={tvShowDetailsStyles.productionDetailDescription}>
            {number_of_episodes}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={tvShowDetailsStyles.productionDetailTitle}>
            Date first episode:
          </Text>
          <Text style={tvShowDetailsStyles.productionDetailDescription}>
            {first_air_date}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={tvShowDetailsStyles.productionDetailTitle}>
            Date last episode:
          </Text>
          <Text style={tvShowDetailsStyles.productionDetailDescription}>
            {last_air_date}
          </Text>
        </View>

        {
          (next_episode_to_air) &&
          (
            <View style={{ flexDirection: 'row' }}>
              <Text style={tvShowDetailsStyles.productionDetailTitle}>
                Current season:
              </Text>
              <Text style={tvShowDetailsStyles.productionDetailDescription}>
                {next_episode_to_air.season_number}
              </Text>
            </View>
          )
        }

        {
          in_production &&
          (
            <View style={{ flexDirection: 'row' }}>
              <Text style={tvShowDetailsStyles.productionDetailTitle}>
                Current episode:
              </Text>
              <Text style={tvShowDetailsStyles.productionDetailDescription}>
                {last_episode_to_air.name}
              </Text>
            </View>
          )
        }

        {
          (next_episode_to_air) &&
          (
            <View style={{ flexDirection: 'row' }}>
              <Text style={tvShowDetailsStyles.productionDetailTitle}>
                Next episode:
              </Text>
              <Text style={tvShowDetailsStyles.productionDetailDescription}>
                {next_episode_to_air.name} - {next_episode_to_air.air_date}
              </Text>
            </View>
          )
        }

        {/* History */}
        <Text style={tvShowDetailsStyles.titlesDetails}>
          History
        </Text>

        <Text style={tvShowDetailsStyles.historyDetail}>
          {overview}
        </Text>
      </View>

      {/* Casting */}
      {
        isActorsDataExist &&
        (
          <View style={tvShowDetailsStyles.castingContainer}>
            <Text style={{
              ...tvShowDetailsStyles.titlesDetails,
              marginLeft: 15
            }}>
              Actors
            </Text>

            <FlatList
              style={tvShowDetailsStyles.swiperContainer}
              data={cast}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CastDetails actor={item} />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )
      }

      {/* Trailers */}
      {
        trailerState?.length &&
        (
          <View style={tvShowDetailsStyles.similarMoviesContainer}>
            <Text style={{
              ...tvShowDetailsStyles.titlesDetails,
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
      <View style={tvShowDetailsStyles.similarMoviesContainer}>
        <Text style={{
          ...tvShowDetailsStyles.titlesDetails,
          marginLeft: 15
        }}>
          Similar Series
        </Text>

        <FlatList
          data={similarTvShows}
          keyExtractor={(movie) => movie.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={(({ item }) => (
            <SimilarCard posterPath={item.poster_path} />
          ))}
        />
      </View>
    </>
  )
}