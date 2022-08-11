import React from "react";
import { Text,
         View, 
         SafeAreaView, 
         ScrollView, 
         StyleSheet } from "react-native";

import COLORS from "../const/colors";
import Input from "../components/Input"
import Button from "../components/Button";


const Cadastro = () => {
    /* capturando, armazenando dados com state */
    const [inputs, setInputs] = React.useState({
        titulo: '',
        descricao: '',
        capa: '',
    })

    /* função para manipular a entrada de dados na state no método onChangeText */
    const handleOnChange = (text, input) => {
        setInputs((prevState) => (
            /* inserção de dados na state. 
               sobrescrevendo em cada um dos itens do obj.json o texto digitado na input */
            console.log(prevState),
            {...prevState, [input]:text} 
        ))
    }

    /* validando dados de cadastro através desta função */
    const validate = () => {
        let validade = true

        if (!inputs.titulo) {
            validade = false
            console.log('titulo vazio')
        }

        if (!inputs.descricao) {
            validade = false
            console.log('descricao vazio')
            
        }

        if (!inputs.capa) {
            validade = false
            console.log('capa vazio')
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
                           onChangeText={(text) => handleOnChange(text, 'titulo')}/>
                    <Input label="Descrição" 
                           onChangeText={(text) => handleOnChange(text, 'descricao')}/>
                    <Input label="Capa"
                    onChangeText={(text) => handleOnChange(text, 'capa')}/>
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
            fontWeight: "bold"
        },
        viewForm: {
            marginVertical: 20,
        }
    }
)

export default Cadastro