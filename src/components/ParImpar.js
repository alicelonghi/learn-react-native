import React from 'react';
import {Text, View} from 'react-native';

export default ({num = 0}) => {
  //renderização condicional com if ternario
  return <View>{num % 2 === 0 ? <Text>Par</Text> : <Text>Ímpar</Text>}</View>;
};
