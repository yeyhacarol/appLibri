import React, {useState, useEffect} from 'react';
import apiLivraria from '../service/apiLivraria';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import capaLivro150 from '../assets/livros/lor150.png';

const Listagem = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    apiLivraria.get('/listarLivros').then(data => {
      //console.log(data.data);
      setLivros(data.data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={estilos.container}>
        {livros.map(livro => (
          <TouchableOpacity
            style={estilos.post}
            key={livro.cod_livro}
            onPress={() => {}}>
            <View style={estilos.conteudo}>
              <Image style={estilos.imagem} source={capaLivro150} />
              <Text style={estilos.titulo}>{livro.titulo}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
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
    elevation: 5,
  },
  conteudo: {
    alignItems: 'center',
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
});

export default Listagem;
