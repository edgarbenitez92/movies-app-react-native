import { useEffect, useState } from "react";

import movieDB from "../api/movieDB";

import { MoviesState } from "../interfaces/flatListMovies.interface";
import { MovieDB } from "../interfaces/movies.interfaces";

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    // topRated: [],
    upcoming: []
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDB>('/now_playing');
    const popularPromise = movieDB.get<MovieDB>('/popular');
    // const topRatedPromise = movieDB.get<MovieDB>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDB>('/upcoming');

    const moviesData = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      // topRatedPromise,
      upcomingPromise
    ]);

    setMoviesState({
      nowPlaying: moviesData[0].data.results,
      popular: moviesData[1].data.results,
      // topRated: moviesData[2].data.results,
      upcoming: moviesData[2].data.results,
    });

    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return { ...moviesState, isLoading }
}
