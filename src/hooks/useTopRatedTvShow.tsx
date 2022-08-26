import { useEffect, useState } from "react";
import tvShowDB from "../api/tvShowDB";
import { TvShow, TvShowDB } from '../interfaces/tvShow.interface';

export const useTopRatedTvShow = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [topRated, setTopRated] = useState<TvShow[]>();

  const getTopRatedTvShows = async () => {
    const { data } = await tvShowDB.get<TvShowDB>('/top_rated');
    setTopRated(data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    getTopRatedTvShows();
  }, []);

  return { topRated, isLoading }
}
