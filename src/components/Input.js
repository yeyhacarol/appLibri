import React from "react";
import { View, 
         Text,
         TextInput, 
         StyleSheet } from "react-native";

import COLORS from "../const/colors";

const Input = ({ label, error, ...props }) => {
    return (
        <View style={estilos.formContainer} >
            <Text style={estilos.inputLabel} >
                {label}
            </Text> 
            <View style={[estilos.inputContainer, {borderColor: error ? COLORS.red : COLORS.black}]} >
                <TextInput style={estilos.textInput} 
                           autoCorrect={false}
                           onFocus={() => {onFocus()}}
                           {...props} />
            </View>
            <Text style={estilos.errorMessage}>{error}</Text>
        </View>
    )
}

const estilos = StyleSheet.create(
    {
        formContainer: {
            marginBottom: 15,
        },
        inputLabel: {
            marginVertical: 5,
            fontSize: 15,
            color: COLORS.grey
        },
        inputContainer: {
            height: 55,
            backgroundColor: COLORS.lightGrey,
            flexDirection: "row",
            borderWidth: 0.5,
            borderRadius: 10,
            paddingHorizontal: 15,
            alignItems: "center"
        },
        textInput: {
            flex: 1
        },
        errorMessage: {
            color: COLORS.red,
            fontSize: 12,
            paddingTop: 5
        }
    }
)

export default Input