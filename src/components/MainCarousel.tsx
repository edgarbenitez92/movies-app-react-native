import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import ImageColors from 'react-native-image-colors';

import { MoviePoster } from './MoviePoster';

import { Movie } from '../interfaces/movies.interfaces';
import { carouselStyles } from '../styles/CarouselStyles';
import { getImageColors } from '../helpers/getColors';

interface Props {
  movies: Movie[];
}

export const MainCarousel = ({ movies }: Props) => {

  const getPosterColors = async (index: number) => {
    const { poster_path } = movies[index];
    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const [primary, secondary] = await getImageColors(uri);

    console.log('colors: ', primary, secondary);
  }

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
      data={movies}
      renderItem={({ item }: any) => <MoviePoster movie={item} />}
      width={300}
      height={420}
      onSnapToItem={(index) => getPosterColors(index)}
    />
  )
}
