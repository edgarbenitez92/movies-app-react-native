import React, { useContext } from 'react';
import Carousel from 'react-native-reanimated-carousel';

import { MoviePoster } from './MoviePoster';

import { carouselStyles } from '../styles/CarouselStyles';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';
import { TvShow } from '../interfaces/tvShow.interface';
import { TvShowPoster } from './TvShowPoster';

interface Props {
  tvShows: TvShow[];
}

export const MainCarouselTv = ({ tvShows }: Props) => {

  const { setMainColors } = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const { poster_path } = tvShows[index];
    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const [primary = 'green', secondary = 'red'] = await getImageColors(uri);

    setMainColors({ primary, secondary });
  }

  useEffect(() => {
    if (tvShows.length) getPosterColors(0);
  }, [tvShows])

  return (
    <Carousel
      mode='parallax'
      style={carouselStyles.carousel}
      windowSize={2}
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 40,
        parallaxAdjacentItemScale: 0.75,
      }}
      snapEnabled
      data={tvShows}
      renderItem={({ item }) => <TvShowPoster tvShow={item} />}
      width={300}
      height={420}
      onSnapToItem={(index) => getPosterColors(index)}
    />
  )
}
