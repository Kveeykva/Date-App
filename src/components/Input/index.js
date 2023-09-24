import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import colors from "../../colors";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { max } from "react-native-reanimated";

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
    style,
    disabled,
    keyboardType,
    image,
    maxLength,
  } = props;
  const [number, onChangeNumber] = React.useState(null);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={[styles.inputView]}>
      <TextInput
        style={[styles.input, style]}
        onFocus={() => setIsFocused(false)}
        onChangeText={onChangeText}
        onBlur={onBlur}
        disabled={disabled}
        label={label}
        value={value}
        maxLength={maxLength}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        right={
          <TextInput.Icon
            name={<AntDesign name="filter" size={24} color="black" />}
            size={24}
            color={isFocused ? colors.primary : colors.black}
          />
        }
        selectTextOnFocus={false}
        underlineStyle={{
          backgroundColor: null,
        }}
        theme={{
          colors: {
            primary: colors.lightBlue,
          },
        }}
      />
      <Image style={styles.profilePic} source={image} />

      <View>
        {error && touched && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

export default Input;
