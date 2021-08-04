import React, {useState} from 'react';
import {Text} from 'react-native';
import style from '../style';

import Filho from './Filho';

export default props => {
  const [num, setNum] = useState(0);
  // altera o estado
  function exibirValor(numero) {
    setNum(numero);
  }
  // a prop funcao faz a comunicação indireta onde o filho passa as infomações pro pai, como se fosse um emit evento do Vue.js
  return (
    <>
      <Text>{num}</Text>
      <Filho min={1} max={72} funcao={exibirValor} />
    </>
  );
};
