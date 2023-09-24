import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    padding: 20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    flex: 0.5,
  },
  line: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 2,
    marginBottom: 10,
    width: "20%",
    alignSelf: "center",
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: "center",
  },
});

export default styles;
