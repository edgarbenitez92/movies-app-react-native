import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

import { MoviePoster } from './MoviePoster';

import { Movie } from '../interfaces/movies.interfaces';
import { carouselStyles } from '../styles/CarouselStyles';

interface Props {
  movies: Movie[];
}

export const MainCarousel = ({ movies }: Props) => {
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
    />
  )
}
