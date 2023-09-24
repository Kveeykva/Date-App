import { StyleSheet } from "react-native";
import colors from "../../../colors";

const styles = StyleSheet.create({
  messageContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  input: {
    margin: 10,
    backgroundColor: colors.lightGrey,
    width: "90%",
    alignSelf: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default styles;
