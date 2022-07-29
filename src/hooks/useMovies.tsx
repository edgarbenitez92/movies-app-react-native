import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDB } from "../interfaces/movies.interfaces";


export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [cineMovies, setCineMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const respNowPlaying = await movieDB.get<MovieDB>('/now_playing');
    const respPopular = await movieDB.get<MovieDB>('/popular');
    const respTopRated = await movieDB.get<MovieDB>('/top_rated');
    const respUpcoming = await movieDB.get<MovieDB>('/upcoming');

    setCineMovies(respNowPlaying.data.results);
    setPopularMovies(respPopular.data.results);
    setTopRatedMovies(respTopRated.data.results);
    setUpcomingMovies(respUpcoming.data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return {
    cineMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    isLoading
  }
}
