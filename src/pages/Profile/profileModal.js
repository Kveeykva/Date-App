import React from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";
import Button from "../../components/Button";
import styles from "./profileModalStyles";
import { useNavigation } from "@react-navigation/native";

const ProfileModal = (props) => {
  const { visible, hideModal } = props;
  const navigation = useNavigation();
  return (
    <Modal
      style={styles.modal}
      swipeDirection={["up", "down"]}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      backdropOpacity={0.5}
      propagateSwipe={true}
      onSwipeComplete={hideModal}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      isVisible={visible}
      onDismiss={hideModal}
    >
      <View style={styles.container}>
        <View style={styles.line} />
      </View>
    </Modal>
  );
};
export default ProfileModal;
