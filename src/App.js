import React from 'react';
import Primeiro from './components/Primeiro';
import X, {Comp1, Comp2} from './components/Multi.js';
import {View, StyleSheet} from 'react-native';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';

export default () => (
  <View style={style.App}>
    {/* <Primeiro/>
        <Comp1/>
        <Comp2 />
        <X/> */}
    {/* <MinMax min={3} max={20} />
    <Aleatorio min={6} max={9} /> */}
    <Titulo principal="Título principal" secundario="subtitulo" />
  </View>
);

// o StyleSheet ajuda a criar um estilo
const style = StyleSheet.create({
  App: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
