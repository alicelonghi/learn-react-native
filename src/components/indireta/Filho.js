import React from 'react';
import {Button} from 'react-native';
import style from '../style';

export default props => {
  function geraNumero(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
  }
  return (
    <>
      <Button
        title="Componente Filho"
        onPress={function () {
          const n = geraNumero(props.min, props.max);
          props.funcao(n);
        }}
      />
    </>
  );
};
