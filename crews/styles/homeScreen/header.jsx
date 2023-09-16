import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "../colors";

export const headerStyles = StyleSheet.create({

  headerLayout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    color: colors.white,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 700
  },

  headerIcon: {
    marginEnd: 15
  }

})