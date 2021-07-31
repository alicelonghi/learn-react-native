import React from 'react';
import {Text} from 'react-native';

export default props => {
  /**
   * destruction
   */
  const {min, max} = props;

  /**
   * retorna um número aleatório entre as props min e max
   */
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return <Text>{number}</Text>;
};
