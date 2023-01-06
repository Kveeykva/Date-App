import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inlineContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  secondText: {
    fontSize: 12,
    color: "grey",
  },
  button: {
    backgroundColor: "white",
    borderColor: colors.primary,
    borderWidth: 1,
    width: width - 20,
    height: 45,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    position: "absolute",
  },
  nextText: {
    color: colors.primary,
    fontWeight: "bold",
    paddingHorizontal: 20,
    position: "absolute",
    right: 0,
    fontSize: 20,
    alignSelf: "center",
  },
  buttonView: {
    flexDirection: "row",
  },
});

export default styles;
