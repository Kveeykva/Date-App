import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../colors";

const InterestButton = (props) => {
  const { text } = props;
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={selected ? styles.selected : styles.button}
      onPress={() => setSelected(!selected)}
    >
      <Text style={selected ? styles.selectedText : styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    height: 40,
    padding: 10,
    borderRadius: 10,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  selected: {
    backgroundColor: colors.primary,
    height: 40,
    padding: 10,
    borderRadius: 10,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 14,
  },
  selectedText: {
    color: "white",
    fontSize: 14,
  },
});

export default InterestButton;
