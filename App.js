import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Cadastro from './src/telas/Cadastro';
import Listagem from './src/telas/Listagem';
import Detalhes from './src/telas/Detalhes';
import Editar from './src/telas/Editar';

const Stack = createNativeStackNavigator();

/* name -> nome que queremos chamar para ir a uma determinada tela; 
   component -> componente que desejamos renderizar nesse caminho específico;
   options -> representa as opções da tela que desejamos */

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{title: 'Cadastro de livros'}}
        /> */}
        <Stack.Screen
          name="Listagem"
          component={Listagem}
          options={{title: 'Listagem de livros'}}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{title: 'Detalhes do livro'}}
        />
        <Stack.Screen
          name="Editar"
          component={Editar}
          options={{title: 'Editar livro'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
