import React, {useEffect, useState} from 'react';
import apiLivraria from '../service/apiLivraria';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import COLORS from '../const/colors';

import capaLivro150 from '../assets/livros/lor150.png';

const Detalhes = () => {
  const cod_livro = 1;

  const [livro, setLivro] = useState({
    cod_livro: '',
    imagem: '',
    titulo: '',
    descricao: '',
  });

  useEffect(() => {
    apiLivraria.get(`/listarLivro/${cod_livro}`).then(livro => {
      setLivro(livro.data[0]);
    });
  });

  return (
    <ScrollView style={estilos.view}>
      <View style={estilos.container}>
        <View style={estilos.post}>
          <Image style={estilos.imagem} source={capaLivro150} />
          <Text style={estilos.titulo}>{livro.titulo}</Text>
          <Text style={estilos.descricao}>{livro.descricao}</Text>
        </View>
        <View style={estilos.botoes}>
          <TouchableOpacity style={estilos.botao} onPress={() => {}}>
            <Text style={estilos.textoBotao}>EDITAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botao} onPress={() => {}}>
            <Text style={estilos.textoBotao}>DELETAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#ccc',
  },
  container: {
    alignItems: 'center',
  },
  post: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  imagem: {
    borderRadius: 5,
    marginVertical: 16,
    marginLeft: 16,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descricao: {
    width: '100%',
    fontSize: 16,
    textAlign: 'justify',
  },
  botoes: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  botao: {
    width: '50%',
    marginHorizontal: 10,
    backgroundColor: COLORS.darkBlue,
  },
  textoBotao: {
    padding: 10,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Detalhes;
