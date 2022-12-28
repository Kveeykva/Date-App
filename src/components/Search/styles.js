import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  searchIcon: {
    color: colors.primary,
    fontSize: 20,
  },
  modalView: {
    backgroundColor: "red",
    height: width,
    width: width,
  },
});

export default styles;
