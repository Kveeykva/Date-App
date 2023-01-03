import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  inlineContainer: {
    marginTop: 20,
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
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 14,
    color: colors.darkGrey,
    marginTop: 5,
  },
  icon: {
    backgroundColor: colors.white,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: colors.darkGrey,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 10,
  },
  littleIcon: {
    backgroundColor: colors.white,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: colors.darkGrey,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 10,
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
    borderRadius: 30,
    width: 200,
  },
  boxView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 20,
  },
  premiumContentView: {
    marginHorizontal: 20,
  },
});

export default styles;
