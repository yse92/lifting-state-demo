import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {BoilingVerdict} from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import {toCelsius, toFahrenheit, tryConvert} from './utils';

export const Calculator = () => {
  const [scale, setScale] = useState('')
  const [temperature, setTemperature] = useState('')

  const handleCelsiusChange = (temperature) => {
    setScale('c')
    setTemperature(temperature)
  }

  const handleFahrenheitChange = (temperature) => {
    setScale('f')
    setTemperature(temperature)
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  console.log('celsius ', celsius)
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  console.log('fahrenheit ', fahrenheit)
    return (
      <View style={styles.container}>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}/>
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 50,
  },
});

