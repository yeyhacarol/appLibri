import React, {useState, useEffect} from 'react';
import apiLivraria from '../service/apiLivraria';

import {Text, View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import COLORS from '../const/colors';
import Input from '../components/Input';
import Button from '../components/Button';

const Editar = ({route, navigation}) => {
  const [inputs, setInputs] = useState({
    titulo: '',
    descricao: '',
    imagem: '',
  });

  const {cod_livro} = route.params;

  useEffect(() => {
    apiLivraria.get(`/listarLivro/${cod_livro}`).then(data => {
      setInputs(data.data[0]);
    });
  }, []);

  const handleOnChange = (text, input) => {
    setInputs(prevState => ({
      ...prevState,
      [input]: text,
    }));
  };

  const [error, setErrors] = useState({});

  const handleErrors = (errorMessage, input) => {
    setErrors(prevState => ({
      ...prevState,
      [input]: errorMessage,
    }));
  };

  const validate = () => {
    let validate = true;

    if (!inputs.titulo) {
      validate = false;
      handleErrors('Insira um título.', 'titulo');
    }

    if (!inputs.descricao) {
      validate = false;
      handleErrors('Insira uma descrição.', 'descricao');
    }

    if (!inputs.imagem) {
      validate = false;
      handleErrors('Insira uma imagem.', 'imagem');
    }

    if (validate) {
      editar();
    }
  };

  const editar = () => {
    try {
      const response = apiLivraria.put('/alterarLivro', {
        titulo: inputs.titulo,
        descricao: inputs.descricao,
        imagem: inputs.imagem,
        cod_livro: inputs.cod_livro,
      });

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>
        <Text style={estilos.textTitle}>EDITAR LIVROS</Text>
        <View style={estilos.viewForm}>
          <Input
            label="Título"
            iconName="book-outline"
            onChangeText={text => handleOnChange(text, 'titulo')}
            value={inputs.titulo}
            onFocus={() => handleErrors('', 'titulo')}
            error={error.titulo}
          />
          <Input
            label="Descrição"
            iconName="card-text-outline"
            onChangeText={text => handleOnChange(text, 'descricao')}
            value={inputs.descricao}
            onFocus={() => handleErrors('', 'descricao')}
            error={error.descricao}
          />
          <Input
            label="Capa"
            iconName="image-outline"
            onChangeText={text => handleOnChange(text, 'imagem')}
            value={inputs.imagem}
            onFocus={() => handleErrors('', 'imagem')}
            error={error.imagem}
          />
          <Button title="EDITAR" onPress={validate} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scroll: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  textTitle: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  viewForm: {
    marginVertical: 20,
  },
});

export default Editar;
