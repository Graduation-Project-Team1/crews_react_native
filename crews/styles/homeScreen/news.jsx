import { StyleSheet } from "react-native";
import colors from "../colors";

export const newsStyle = StyleSheet.create({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 10
  },

  image: {
    width: 130,
    height: 85,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },

  title: {
    fontSize: 13,
    color: colors.black,
    width: 130,
    marginTop: 12
  },

  writer: {
    fontSize: 10,
    color: colors.black,
    width: 130,
    marginTop: 3
  }
})