import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import COLORS from "../const/colors";

const Button = ({ title }) => {
    return (
        <TouchableOpacity style={estilos.button}
                          activeOpacity={0.8}>
            <Text style={estilos.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create(
    {
        button: {
            backgroundColor: COLORS.blue,
            height: 55,
            width: "100%",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
        },
        title: {
            color: COLORS.white,
            fontSize: 18,
            fontWeight: "bold"
        }
    }
)

export default Button