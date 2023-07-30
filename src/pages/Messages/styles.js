import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  imageView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  name: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  messageItemView: {
    paddingLeft: 10,
  },
  messageView: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "#e0e0e0",
    marginRight: 20,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    marginHorizontal: -10,
  },
});

export default styles;
