import { StyleSheet } from "react-native";
import colors from "../colors";

export const trendBarStyle = StyleSheet.create({
  layout: {
    width: "80%"
  },

  background: {
    height: 15,
    position: "relative",
    backgroundColor: colors.BGgray,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },

  front: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },

  keywords: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5
  }
})