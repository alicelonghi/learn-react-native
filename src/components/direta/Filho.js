import React from 'react';
import {Text} from 'react-native';
import style from '../style';

export default props => {
  return (
    <>
      <Text style={style.fontG}>{props.a}</Text>
      <Text style={style.fontG}>{props.b}</Text>
    </>
  );
};
