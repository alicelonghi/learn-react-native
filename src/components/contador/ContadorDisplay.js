import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import style from '../style';

export default props => {
  return (
    <View style={style2.Display}>
      <Text style={[style.fontG, style2.DisplayText]}>{props.num}</Text>
    </View>
  );
};

const style2 = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20,
    width: 200,
  },
  DisplayText: {
    color: '#fff',
  },
});
