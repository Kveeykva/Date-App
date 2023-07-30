import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inlineContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonView: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    width: width - 20,
    height: 45,
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
  phoneText: {
    color: colors.black,
    position: "absolute",
    fontSize: 14,
    alignSelf: "center",
    right: 40,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    position: "absolute",
  },
  underText: {
    fontSize: 12,
    color: colors.grey,
    marginHorizontal: 10,
  },
  currentLocationView: {
    marginTop: 10,
  },
  travelButton: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 1,
    width: width - 20,
    height: 45,
  },
  travelButtonText: {
    color: colors.white,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    position: "absolute",
  },
  travelNextText: {
    color: colors.white,
    fontWeight: "bold",
    paddingHorizontal: 20,
    position: "absolute",
    right: 0,
    fontSize: 20,
    alignSelf: "center",
  },
});

export default styles;
