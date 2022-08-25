import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDB } from "../interfaces/movies.interfaces";

export const useTopRatedMovie = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [topRated, setTopRated] = useState<Movie[]>();

  const getTopRatedMovies = async () => {
    const { data } = await movieDB.get<MovieDB>('/top_rated');
    setTopRated(data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return { topRated, isLoading }
}
