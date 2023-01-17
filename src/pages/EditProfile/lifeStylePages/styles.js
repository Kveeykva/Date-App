import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../colors";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inlineContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: colors.white,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    marginVertical: 10,
  },
  swipeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  genderSwipeView: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    marginVertical: 10,
  },
  currentGender: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    height: 40,
  },
});

export default styles;
