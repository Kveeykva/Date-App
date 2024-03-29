import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  inlineContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },

  search: {},
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    width: width - 80,
    height: 40,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  waitingMatch: {
    marginTop: 20,
  },
  newMatchesTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  matchesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  matchesView: {
    backgroundColor: colors.lightGrey,
    borderRadius: 30,
    marginRight: 10,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    resizeMode: "contain",
  },
  messagesView: {
    marginTop: 20,
  },
  messagesContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "flex-start",
    width: width - 20,
  },
  textView: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
   justifyContent:'center', 
    alignSelf:'center',
    fontSize: 16,
    marginLeft: 10,
  },
  message: {
    fontSize: 12,
    alignSelf: "center",
    width: width - 100,
  },
  flatList: {
    height: height - 310,
  },
  profilePhoto:{
    width:50,
    height:50,
    resizeMode:'contain',

    borderRadius:50,
  },
  imageView:{
    flexDirection:'row',
  },
  messageItemView:{
    
  }
});

export default styles;
