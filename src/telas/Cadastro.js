import React, { useState }from "react";
import apiLivraria from "../service/apiLivraria";

import { Text,
         View, 
         SafeAreaView, 
         ScrollView, 
         StyleSheet } from "react-native";

import COLORS from "../const/colors";
import Input from "../components/Input"
import Button from "../components/Button";


const Cadastro = () => {
    /* Todo state deve possuir um handler */
    /* capturando, armazenando dados com state */
    const [inputs, setInputs] = useState({
        titulo: '',
        descricao: '',
        capa: '',
    })

    /* função para manipular a entrada de dados na state no método onChangeText */
    const handleOnChange = (text, input) => {
        /* o parâmetro prevState representa o estado atual do state */
        setInputs((prevState) => ({
            /* inserção de dados no state. 
               O ...prevState representa cada um dos itens do array do state, o [input] representa cada uma das inputs e o valor delas que vem por meio da digitação é o text. 
               A utilização do spread(...) é necessária para que os valores sejam comparados e sobreescrevidos. 
               [input]:text -> remontar o array da state a cada atualização da state, ou seja, a cada digitação */
            ...prevState, [input]:text 
        }))
    }

    /* state de erro de preenchimento */
    const [error, setErrors] = useState({})

    /* função para configurar as mensagens de erro na state */
    const handleErrors = (errorMessage, input) => {
        setErrors((prevState) => ({
            ...prevState, [input]:errorMessage
        }))
    }

    /* validando dados de cadastro por meio desta função */
    const validate = () => {
        let validade = false

        if (!inputs.titulo) {
            validade = false
            handleErrors('Insira um título.', 'titulo')
        }

        if (!inputs.descricao) {
            validade = false
            handleErrors('Insira uma descrição.', 'descricao')
            
        }

        if (!inputs.capa) {
            validade = false
            handleErrors('Insira uma capa.', 'capa')
        }

        if (validade) {
            cadastrar()
            console.log("cadastrou")
        }
    }

    const cadastrar = () => {
        try {
            const response = apiLivraria.post('/cadastrarLivro', {
                titulo: inputs.titulo,
                descricao: inputs.descricao,
                imagem: inputs.capa
            })
        } catch (error) {

        }
    }

    return (
        <SafeAreaView style={estilos.safe}>
            <ScrollView style={estilos.scroll}>
                <Text style={estilos.textTitle}>
                    CADASTRO DE LIVROS
                </Text>
                <View style={estilos.viewForm}>
                    <Input label="Título" 
                           iconName="book-outline"
                           onChangeText={(text) => handleOnChange(text, 'titulo')}
                           onFocus={() => handleErrors('', 'titulo')}
                           error={error.titulo} />
                    <Input label="Descrição" 
                           iconName="card-text-outline"
                           onChangeText={(text) => handleOnChange(text, 'descricao')}
                           onFocus={() => handleErrors('', 'descricao')}
                           error={error.descricao} />
                    <Input label="Capa"
                           iconName="image-outline"
                           onChangeText={(text) => handleOnChange(text, 'capa')}
                           onFocus={() => handleErrors('', 'capa')}
                           error={error.capa} />
                    <Button title="CADASTRAR"
                            onPress={validate} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create(
    {
        safe: {
            flex: 1,
            backgroundColor: COLORS.white
        },
        scroll: {
            paddingTop: 50,
            paddingHorizontal: 20
        },
        textTitle: {
            color: COLORS.black,
            fontSize: 25,
            fontWeight: "bold",
        },
        viewForm: {
            marginVertical: 20,
        }
    }
)

export default Cadastro