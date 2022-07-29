import React from 'react';
import { Image, Text, View } from 'react-native';
import { Cast } from '../interfaces/credits.interface';
import { castDetailsStyles } from '../styles/CastDetailsStyles';

interface Props {
  actor: Cast;
}

export const CastDetails = ({ actor }: Props) => {

  let { name, character, profile_path } = actor;
  const uri = `https://image.tmdb.org/t/p/w500${profile_path}`;

  return (
    <View style={castDetailsStyles.castContainer}>

      {
        profile_path
          ? <Image source={{ uri }} style={castDetailsStyles.actorPhoto} />
          : <Image source={require('../assets/images/no-photo.jpg')} style={castDetailsStyles.actorPhoto} />
      }

      <View style={castDetailsStyles.actorInfoContainer}>
        <Text style={castDetailsStyles.actorName}>
          {name}
        </Text>

        <Text style={castDetailsStyles.actorCharacterName}>
          {character}
        </Text>
      </View>
    </View>
  )
}
