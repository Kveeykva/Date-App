import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  swiperContainer: {
    height: height - 250,
  },
  buttonsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "15%",
  },
  photoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: 15,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  cityText: {
    color: colors.grey,
    marginBottom: 10,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  distanceText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
  },
  distanceView: {
    borderRadius: 10,
    width: 50,
    height: 25,
    marginRight: 10,
  },
  buttonsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "15%",
  },
});

export default styles;
