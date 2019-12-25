import React, { Fragment } from "react";
import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  multiline,
  numberOfLines
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Fragment>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={inputStyle}
          label={label}
          mode={"outlined"}
        />
      </Fragment>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  },
  inputStyle: {
    backgroundColor: "#EBF5FB",
    borderColor: "#0099FF",
    marginRight: 15,
    marginLeft: 15,
    fontSize: 18,
    flex: 4
  }
};

export { Input };
