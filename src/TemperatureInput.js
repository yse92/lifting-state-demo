import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта',
};

const TemperatureInput = props => {
  const {scale, temperature, onTemperatureChange} = props;

  const handleChange = (temperature) => {
    onTemperatureChange(temperature)
  }

  return (
        <>
          <Text>{`Введите температуру в градусах ${scaleNames[scale]}`}</Text>
          <TextInput
            onChangeText={handleChange}
            value={temperature}
            placeholder="temperature"
            style={{fontSize: 20}}
          />
        </>
      );
}

export default TemperatureInput;
