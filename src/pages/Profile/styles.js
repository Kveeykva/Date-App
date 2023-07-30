import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
  completeProfile: {
    fontSize: 12,
    alignSelf: "center",
    marginTop: 10,
    color: colors.grey,
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  iconTextView: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 10,
    marginRight: 10,
  },

  premiumBox: {
    marginVertical: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 150,
    width: width - 40,
    alignSelf: "center",
    marginRight: 10,
  },
  button: {
    backgroundColor: colors.white,
    borderRadius: 30,
    width: 200,
  },
  buttonText: {
    color: colors.darkGrey,
    fontWeight: "normal",
  },
  boostBox: {
    marginVertical: 20,
    backgroundColor: colors.turquoise,
    borderRadius: 10,
    height: 150,
    width: width - 40,
    marginRight: 10,
  },
  goldBox: {
    marginVertical: 20,
    backgroundColor: colors.gold,
    borderRadius: 10,
    height: 150,
    width: width - 40,
  },
  boostButtonText: {
    color: colors.darkGrey,
    fontWeight: "normal",
  },
  boostButton: {
    backgroundColor: colors.white,
    width: 200,
  },
  boxView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 20,
  },
  premiumContentView: {
    marginBottom: 20,
  },
  editProfileButtonText: {
    color: colors.primary,
    fontWeight: "bold",
    alignSelf: "center",
  },
  editProfileButton: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    height: 30,
    width: 200,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default styles;
