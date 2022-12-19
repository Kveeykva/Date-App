import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import colors from "../../colors";
import { TextInput } from "react-native-paper";

const Input = (props) => {
  const {
    secureTextEntry,
    value,
    onBlur,
    placeholder,
    onChangeText,
    error,
    touched,
    label,
    right,
  } = props;
  const [number, onChangeNumber] = React.useState(null);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={[styles.inputView]}>
      <TextInput
        style={styles.input}
        onFocus={() => setIsFocused(false)}
        onChangeText={onChangeText}
        onBlur={onBlur}
        label={label}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        mode="outlined"
        right={right}
        outlineStyle={{
          borderColor: colors.black,
          borderRadius: 10,
          shadowColor: colors.black,
        }}
      />
      <View>
        {error && touched && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

export default Input;
