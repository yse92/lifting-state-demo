import {Text} from 'react-native';
import React from 'react';

export const BoilingVerdict = props => {
  if (props.celsius >= 100) {
    return <Text>Вода закипит</Text>;
  }
  return <Text>Вода не закипит</Text>;
};
