import React from 'react';
import {Text} from 'react-native';

import Estilo from './style';

export default props => {
  return (
    <Text style={Estilo.fontG}>
      O valor {props.max} é maior queo valor {props.min}
    </Text>
  );
};
