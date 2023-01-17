import React from "react";
import { View, TextInput, Text } from "react-native";
import Button from "../../../components/Button";
import styles from "../styles";

const WorkScreen = (props) => {
  const [text, onChangeText] = React.useState();
  return (
    <View style={styles.container}>
      <View style={styles.inlineContainer}>
        <Text style={styles.title}>Mesleğinizi seçin</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Meslek"
        />
        <Button text="Kaydet ve çık" />
      </View>
    </View>
  );
};
export default WorkScreen;
