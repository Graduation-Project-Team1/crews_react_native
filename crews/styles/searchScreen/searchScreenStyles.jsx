import { StyleSheet } from "react-native";
import colors from "../colors";

export const searchScreenStyles = StyleSheet.create({
  layout: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary,
  },

  header: {
    flexDirection: 'row',
    color: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },

  headerText: {
    color: colors.white,
  },

  resultContainer: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.white
  },
})