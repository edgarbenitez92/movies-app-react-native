import React, { useState } from 'react';
import { Button, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useActor } from '../hooks/useActor';
import { Cast } from '../interfaces/credits.interface';
import { castDetailsStyles } from '../styles/CastDetailsStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Spinner } from './Spinner';
import { actorDetailsModalStyles } from '../styles/ActorDetailsModalStyles';

interface Props {
  actor: Cast;
}

export const CastDetails = ({ actor }: Props) => {

  const { name, character, profile_path } = actor;
  const uri = `https://image.tmdb.org/t/p/w500${profile_path}`;
  const [isVisible, setIsVisible] = useState(false);
  const { actor: actorDetails, isLoading } = useActor(actor.id);

  if (isLoading) return <Spinner />;

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsVisible(true)}
        style={castDetailsStyles.castContainer}
      >

        <Image
          source={(profile_path)
            ? { uri }
            : require('../assets/images/no-photo.jpg')}
          style={castDetailsStyles.actorPhoto}
        />

        <View style={castDetailsStyles.actorInfoContainer}>
          <Text style={castDetailsStyles.actorName}>
            {name}
          </Text>

          <Text style={castDetailsStyles.actorCharacterName}>
            {character}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType='fade'
        visible={isVisible}
        transparent={true}
      >

        {/* Background */}
        <View style={actorDetailsModalStyles.background}>

          {/* Content */}
          <View style={actorDetailsModalStyles.modalContainer}>

            <Image
              source={(actorDetails?.profile_path)
                ? { uri }
                : require('../assets/images/no-photo.jpg')
              }
              style={actorDetailsModalStyles.actorPhoto}
            />

            <View style={{ width: 200 }}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setIsVisible(false)}
                style={actorDetailsModalStyles.buttonCloseModal}
              >
                <Icon
                  name='close-circle-outline'
                  size={20}
                  color='red'
                />
              </TouchableOpacity>

              <Text style={{
                ...actorDetailsModalStyles.titleDetail,
                marginLeft: 10,
                marginBottom: 10
              }}>
                {actorDetails?.name}
              </Text>

              <View style={actorDetailsModalStyles.detailContainer}>
                <Text style={{
                  ...actorDetailsModalStyles.titleDetail,
                  marginBottom: 5
                }}>
                  Birthday:
                </Text>

                <Text style={actorDetailsModalStyles.descriptionDetail}>
                  {actorDetails?.birthday}
                </Text>
              </View>

              {
                actorDetails?.deathday &&
                (
                  <View style={actorDetailsModalStyles.detailContainer}>
                    <Text style={{
                      ...actorDetailsModalStyles.titleDetail,
                      marginBottom: 5
                    }}>
                      Deathday:
                    </Text>

                    <Text style={actorDetailsModalStyles.descriptionDetail}>
                      {actorDetails?.deathday}
                    </Text>
                  </View>
                )
              }

              <View style={{ marginLeft: 10, marginBottom: 10, }}>
                <Text style={{
                  ...actorDetailsModalStyles.titleDetail,
                  marginBottom: 5
                }}>
                  Place of birth:
                </Text>

                <Text style={actorDetailsModalStyles.descriptionDetail}>
                  {actorDetails?.place_of_birth}
                </Text>
              </View>

              <View style={actorDetailsModalStyles.detailContainer}>
                <Text style={{
                  ...actorDetailsModalStyles.titleDetail,
                  marginBottom: 5
                }}>
                  Profession:
                </Text>

                <Text style={actorDetailsModalStyles.descriptionDetail}>
                  {actorDetails?.known_for_department}
                </Text>
              </View>

              <View style={actorDetailsModalStyles.detailContainer}>
                <Text style={{
                  ...actorDetailsModalStyles.titleDetail,
                  marginBottom: 5
                }}>
                  Popularity:
                </Text>

                <Text style={actorDetailsModalStyles.descriptionDetail}>
                  {actorDetails?.popularity}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>

  )
}

