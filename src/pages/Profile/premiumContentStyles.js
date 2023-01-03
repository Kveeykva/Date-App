import { StyleSheet } from "react-native";
import colors from "../../colors";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  whatYouGet: {
    flexDirection: "column",
  },
  premium: {
    flexDirection: "column",
  },
  boost: {
    flexDirection: "column",
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  whatYouGetText: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 10,
  },
  premiumText: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 10,
  },
  boostText: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 10,
  },
  checkmarkPremium: {
    alignSelf: "center",
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  checkmarkBoost: {
    alignSelf: "center",
    color: colors.turquoise,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  checkmarkGold: {
    alignSelf: "center",
    color: colors.gold,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default styles;
