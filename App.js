import React from 'react';
// import {NavigationContainer, StackRouter} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cadastro from './src/telas/Cadastro';
import Listagem from './src/telas/Listagem';
import Detalhes from './src/telas/Detalhes';

//const Stack = createNativeStackNavigator();

/* name -> nome que queremos chamar para ir a uma determinada tela; 
   component -> componente que desejamos renderizar nesse caminho específico;
   options -> representa as opções da tela que desejamos */

const App = () => {
  return (
    <>
      {/* <Listagem /> */}
      <Detalhes />
    </>
  );
};

export default App;
