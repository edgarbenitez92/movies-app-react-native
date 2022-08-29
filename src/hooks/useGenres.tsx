import { useEffect, useState } from "react";
import genreDB from "../api/genreDB";
import { Genre } from "../interfaces/movie.interface";

export const useGenres = (genresArr: number[], isAvailable: boolean, typeRequest: string) => {

  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>();

  const getGenresMovies = async () => {
    const { data } = await genreDB.get<any>(`/${typeRequest}/list`);

    const genresMapped = genresArr.map(id => {
      return data.genres.find((genre: Genre) => genre.id == id);
    });

    setGenres(genresMapped);
    setIsLoading(false);
  }

  useEffect(() => {
    if (isAvailable) getGenresMovies();
  }, []);

  return { genres, isLoading }
}
