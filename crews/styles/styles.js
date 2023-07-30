import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "./colors";

export const styles = StyleSheet.create({

  layout: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === `ios` ? 0 : StatusBar.currentHeight,
  },

  container: {
    width: "100%",
    justifyContent: "center",
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
})

export const setColors = StyleSheet.create({
  white: {
    color: colors.white
  }
})

export const setBgColors = StyleSheet.create({
  green: {
    backgroundColor: colors.Green
  }
})