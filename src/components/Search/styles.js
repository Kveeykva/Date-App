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
  searchContainer: {
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#f2e6e8",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
