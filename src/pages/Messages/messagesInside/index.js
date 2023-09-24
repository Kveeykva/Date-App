import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MainHeader from "../../../components/Header";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import Input from "../../../components/Input";
import { AntDesign } from "@expo/vector-icons";

const MessagesInside = (props) => {
  const navigation = useNavigation();

  const { id, name, surname, photo, message } = props.route.params;
  const userPic = photo;

  return (
    <View style={styles.container}>
      <ScrollView>
        <MainHeader
          backPage={() => navigation.goBack()}
          userPic
          image={{ uri: photo }}
          title={`${name} ${surname ? surname : ""}`}
        />
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      </ScrollView>
      <View>
        <Input
          style={styles.input}
          placeholder="Mesajınızı giriniz"
          right={
            <TouchableOpacity>
              <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
};
export default MessagesInside;
