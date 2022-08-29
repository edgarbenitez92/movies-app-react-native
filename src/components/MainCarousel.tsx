import React, { useContext } from 'react';
import Carousel from 'react-native-reanimated-carousel';

import { MoviePoster } from './MoviePoster';

import { Movie } from '../interfaces/movies.interface';
import { carouselStyles } from '../styles/CarouselStyles';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

interface Props {
  movies: Movie[];
}

export const MainCarousel = ({ movies }: Props) => {

  const { setMainColors } = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const { poster_path } = movies[index];
    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const [primary = 'green', secondary = 'red'] = await getImageColors(uri);

    setMainColors({ primary, secondary });
  }

  useEffect(() => {
    if (movies.length) getPosterColors(0);
  }, [movies])

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
      renderItem={({ item }) => <MoviePoster movie={item} />}
      width={300}
      height={420}
      onSnapToItem={(index) => getPosterColors(index)}
    />
  )
}
