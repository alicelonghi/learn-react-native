import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Pai from './components/relacao/Pai';
import Filho from './components/relacao/Filho';
// import Primeiro from './components/Primeiro';
// import X, {Comp1, Comp2} from './components/Multi.js';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Button from './components/Button';
//import Contador from './components/Contador';
//import Pai from './components/direta/Pai';
//import Pai from './components/indireta/Pai';
//import ContadorV2 from './components/contador/ContadorV2';
//import Diferenciar from './components/Diferenciar';
//import ParImpar from './components/ParImpar';

export default () => (
  <SafeAreaView style={style.App}>
    {/* <Primeiro/>
        <Comp1/>
        <Comp2 />
        <X/> */}
    {/* <MinMax min={3} max={20} />
    <Aleatorio min={6} max={9} /> */}
    {/* <Titulo principal="Título principal" secundario="subtitulo" />
     */}
    {/* <Button /> */}
    {/* <Contador inicial={10} /> */}
    {/* <Pai /> */}
    {/* <Pai /> */}
    {/* <ContadorV2 /> */}
    {/* <Diferenciar /> */}
    {/* <ParImpar num={3} /> */}
    <Pai>
      <Filho nome="Teste" sobrenome="Teste sobrenome" />
      <Filho nome="Teste 2" sobrenome="Teste 2 sobrenome" />
    </Pai>
  </SafeAreaView>
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
