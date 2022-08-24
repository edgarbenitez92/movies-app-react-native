import { useEffect, useState } from "react";
import genreDB from "../api/genreDB";
import movieDB from "../api/movieDB";
import { Genre } from "../interfaces/movie.interface";
import { Movie, MovieDB } from "../interfaces/movies.interfaces";

export const useTopRatedMovie = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [topRated, setTopRated] = useState<Movie[]>();

  const getTopRatedMovies = async () => {
    const { data } = await movieDB.get<MovieDB>('/top_rated');
    // mapGenresMovies(data.results);
    setTopRated(data.results);
    setIsLoading(false);
  }

  // const mapGenresMovies = async (topRatedMovies: Movie[]) => {

  //   const { data } = await genreDB.get('/movie/list');

  //   topRatedMovies.forEach((movie) => {
  //     let { genreObject } = movie;

  //     movie.genre_ids.forEach(genre => {
  //       const genreMapped = data.genres.find((data: Genre) => data.id == genre);
  //       genreObject?.push(genreMapped!);
  //     })
  //   });

  //   setTopRated(topRatedMovies);
  //   setIsLoading(false);
  // }

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return { topRated, isLoading }
}
