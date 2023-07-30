import { StyleSheet } from "react-native";
import colors from "../colors";

export const contentsStyle = StyleSheet.create({
  layout: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: colors.white,
    width: "100%",
    flex: 1,
    justifyContent: "space-between"
  },

  title: {
    fontSize: 18,
    fontWeight: 700,
    color: colors.black,
    marginTop: 35,
    marginBottom: 20
  }
})