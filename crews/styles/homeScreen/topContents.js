import { StyleSheet } from "react-native";
import colors from "../colors";

export const topContentsStyles = StyleSheet.create({
  topContentLayout: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10
  },

  topContentLeft: {
    flex: 1.5,
    justifyContent: "center",
    marginEnd: 20
  },

  topContentRight: {
    flex: 1,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },

  topContentText: {
    color: colors.white,
    fontSize: 18,
    marginTop: 7,
    marginBottom: 7
  },

  topContentImageBlack: {
    width:"90%", 
    aspectRatio: 1,
    borderRadius: 100,
    position: "relative",
    tintColor: 'black'
  },

  topContentImage: {
    width:"90%", 
    aspectRatio: 1,
    borderRadius: 100,
    position: "absolute",
    opacity: 0.5
  },

  topContentPlay: {
    color: colors.white,
    position: "absolute",
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto"
  }
})