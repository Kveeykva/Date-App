import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center",
  },
  logoView: {
    alignItems: "center",
    justifyContent: "center",
  },

  input: {},
  passwordInput: {
    justifyContent: "center",
  },
  inputView: {
    justifyContent: "center",
  },
  inputIcon: {
    position: "absolute",
    alignSelf: "center",

    alignItems: "center",
    justifyContent: "center",
    right: 50,
  },
  loginText: {
    color: colors.white,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  textLogin: {
    color: colors.white,
  },

  loginTextButton: {
    color: colors.white,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.white,
  },
  buttonText: {
    color: colors.black,
    fontWeight: "bold",
  },

  errorText: {
    color: "red",
    width: "80%",
    alignSelf: "center",
    fontSize: 12,
  },
});

export default styles;
