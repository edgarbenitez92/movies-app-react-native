import { useEffect, useState } from "react";
import genreDB from "../api/genreDB";
import { Genre } from "../interfaces/movie.interface";
import { Movie } from "../interfaces/movies.interfaces";

export const useGenresMovie = (movie: Movie, isMovieAvailable: boolean) => {

  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>();

  const getGenresMovies = async (movie: Movie) => {
    const { data } = await genreDB.get<any>('/movie/list');

    const genresMapped = movie.genre_ids.map(id => {
      return data.genres.find((genre: Genre) => genre.id == id);
    });

    setGenres(genresMapped);
    setIsLoading(false);
  }

  useEffect(() => {
    if (isMovieAvailable) getGenresMovies(movie);
  }, [movie]);

  return { genres, isLoading }
}
