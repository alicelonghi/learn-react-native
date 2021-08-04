import React from 'react';
import {View, StyleSheet} from 'react-native';
// import Primeiro from './components/Primeiro';
// import X, {Comp1, Comp2} from './components/Multi.js';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
import Button from './components/Button';

export default () => (
  <View style={style.App}>
    {/* <Primeiro/>
        <Comp1/>
        <Comp2 />
        <X/> */}
    {/* <MinMax min={3} max={20} />
    <Aleatorio min={6} max={9} /> */}
    {/* <Titulo principal="Título principal" secundario="subtitulo" />
     */}
    <Button />
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
