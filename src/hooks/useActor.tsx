import { useEffect, useState } from "react";
import { ActorResponse } from '../interfaces/actor.interface';
import actorDB from "../api/actorDB";

export const useActor = (actorId: number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [actor, setActor] = useState<ActorResponse>();

  const getActorDetails = async () => {
    const { data } = await actorDB.get<ActorResponse>(`/${actorId}`);
    setActor(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getActorDetails();
  }, []);

  return { actor, isLoading }
}
