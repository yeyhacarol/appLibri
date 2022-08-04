import React from "react";
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import COLORS from "../const/colors";
import Input from "../components/Input"
import Button from "../components/Button";

const Cadastro = () => {

    return (
        <SafeAreaView style={estilos.safe}>
            <ScrollView style={estilos.scroll}>
                <Text style={estilos.textTitle}>
                    CADASTRO DE LIVROS
                </Text>
                <View style={estilos.viewForm}>
                    <Input label="Título" />
                    <Input label="Descrição" />
                    <Input label="Capa" />
                    <Button title="CADASTRAR"/>
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