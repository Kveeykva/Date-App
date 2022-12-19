import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  inputError: {
    borderWidth: 2,
    borderColor: colors.red,
  },

  inputView: {
    justifyContent: "center",
  },

  errorText: {
    color: colors.white,
    width: "80%",
    alignSelf: "center",
    fontSize: 12,
  },
});

export default styles;
