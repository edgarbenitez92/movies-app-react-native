import { useEffect, useState } from "react";

import tvShowDB from "../api/tvShowDB";

import { TvShowsState } from "../interfaces/flatListTvShows.interface";
import { TvShowDB } from "../interfaces/tvShow.interface";

export const useTvShows = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [tvShowState, setTvShowState] = useState<TvShowsState>({
    airingToday: [],
    onTheAir: [],
    popular: []
  });

  const getTvShows = async () => {
    const airingTodayPromise = tvShowDB.get<TvShowDB>('/airing_today');
    const onTheAirPromise = tvShowDB.get<TvShowDB>('/on_the_air');
    const popularPromise = tvShowDB.get<TvShowDB>('/popular');

    const tvShowsData = await Promise.all([
      airingTodayPromise,
      onTheAirPromise,
      popularPromise
    ]);

    setTvShowState({
      airingToday: tvShowsData[0].data.results,
      onTheAir: tvShowsData[1].data.results,
      popular: tvShowsData[2].data.results,
    });

    setIsLoading(false);
  }

  useEffect(() => {
    getTvShows();
  }, []);

  return { ...tvShowState, isLoading };
}
