import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../const/colors';

const Input = ({label, error, iconName, ...props}) => {
  return (
    <View style={estilos.formContainer}>
      <Text style={estilos.inputLabel}>{label}</Text>
      <View
        style={[
          estilos.inputContainer,
          {borderColor: error ? COLORS.red : COLORS.black},
        ]}>
        <Icon name={iconName} style={estilos.icon} />
        <TextInput
          style={estilos.textInput}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
          }}
          {...props}
        />
      </View>
      <Text style={estilos.errorMessage}>{error}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  formContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    marginVertical: 5,
    fontSize: 15,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.lightGrey,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
  errorMessage: {
    color: COLORS.red,
    fontSize: 12,
    paddingTop: 5,
  },
  icon: {
    fontSize: 22,
    color: COLORS.darkBlue,
    marginRight: 10,
  },
});

export default Input;
