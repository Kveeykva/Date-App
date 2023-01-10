import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  myBasicsText: {
    fontSize: 14,
    color: colors.black,
    alignSelf: "center",
    marginLeft: 10,
  },
  rightText: {
    color: colors.grey,
    fontWeight: "bold",
    alignSelf: "center",
    position: "absolute",
    right: 0,
    fontSize: 14,
    marginRight: 10,
  },
  iconView: {
    alignSelf: "center",
  },
  contentView: {
    marginTop: 10,
  },
  myBasics: {
    flexDirection: "row",
    height: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
  },
});

export default styles;
