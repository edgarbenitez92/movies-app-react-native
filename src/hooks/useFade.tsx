import React, { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = () => {

  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (callBack?: Function) => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start(() => callBack ? callBack() : null);
  }

  const fadeOut = (duration: number) => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration,
        useNativeDriver: true
      }
    ).start();
  }

  return { fadeIn, fadeOut, opacity };
}
