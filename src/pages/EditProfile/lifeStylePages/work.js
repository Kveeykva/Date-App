import React from "react";
import { View, TextInput, Text } from "react-native";
import Button from "../../../components/Button";
import styles from "../styles";
import { setAttribute } from "../../../redux/Slices/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const WorkScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
        <Button
          onPress={() => {
            dispatch(setAttribute({ work: text }));
            navigation.goBack();
          }}
          text="Kaydet ve çık"
        />
      </View>
    </View>
  );
};
export default WorkScreen;
