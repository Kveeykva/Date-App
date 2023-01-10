import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Button from "../../components/Button";
import AddPhoto from "./addPhoto";
import colors from "../../colors";
import MyBasics from "./myBasics";
import LifeStyle from "./lifeStyle";
import { Entypo } from "@expo/vector-icons";
import ConnectAccount from "./connectAccount";
function EditProfile(props) {
  const [text, onChangeText] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Profilini güçlendir</Text>
          <View style={styles.buttonView}>
            <Button
              customStyle={styles.button}
              text={"0% tamamlandı"}
              textCustomStyle={styles.buttonText}
            />
            <Text style={styles.nextText}>{">"}</Text>
          </View>
        </View>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Fotoğraflarım</Text>
          <Text style={styles.secondText}>
            Seni görmeleri için bir kaç fotoğraf ekle
          </Text>
          <View>
            <AddPhoto />
          </View>
          <View style={styles.contentView}>
            <Text style={styles.title}>Hakkımda</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeText}
              value={text}
              multiline={true}
              underlineColorAndroid="transparent"
              placeholder={"Kendini nasıl tanımlarsın?"}
              maxLength={280}
              textAlignVertical={"top"}
              placeholderTextColor={colors.primary}
              color={colors.black}
            />
          </View>
          <View style={styles.contentView}>
            <Text style={styles.title}>İlişki Hedefleri</Text>
            <View style={styles.buttonView}>
              <Button
                customStyle={styles.button}
                text={"Aradığım şey"}
                textCustomStyle={styles.buttonText}
              />
              <Text style={styles.nextText}>{">"}</Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <Text style={styles.title}>İlgi Alanları</Text>
            <View style={styles.buttonView}>
              <Button
                customStyle={styles.button}
                text={"İlgi Alanlarım"}
                textCustomStyle={styles.buttonText}
              />
              <Text style={styles.nextText}>{">"}</Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <MyBasics />
          </View>
          <View style={styles.contentView}>
            <LifeStyle />
          </View>
          <View style={styles.contentView}>
            <ConnectAccount />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EditProfile;
