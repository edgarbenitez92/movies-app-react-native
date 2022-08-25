import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Trailer, TrailerResponse } from '../interfaces/trailerMovie.interface';


export const useMovieTrailer = (id: number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [trailerState, setTrailerState] = useState<Trailer[]>();

  const getTrailerByIdMovie = async () => {
    const { data } = await movieDB.get<TrailerResponse>(`${id}/videos`);

    setTrailerState(data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    getTrailerByIdMovie();
  }, []);

  return { trailerState, isLoading }
}
