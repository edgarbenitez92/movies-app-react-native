import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movies.interfaces";


export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [cineMovies, setCineMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const { data: { results } } = await movieDB.get<MovieDBNowPlaying>('/now_playing');

    setCineMovies(results);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return {
    cineMovies,
    isLoading
  }
}
