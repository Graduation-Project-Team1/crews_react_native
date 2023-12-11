import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "./colors";

export const styles = StyleSheet.create({

  layout: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === `ios` ? 0 : StatusBar.currentHeight,
    position: 'relative',
  },

  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  header: {
    width: "100%",
    justifyContent: "center",
    paddingTop: 30,
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 700,
  },

  scrollContainer : {
    width: "100%",
    height: "100%",
    backgroundColor: '#FFFFFF',
  },

  iconStyleSubGray: {
    color: colors.iconGray,
  },

  iconStyleTextGray: {
    color: colors.iconGray,
  },
})

export const setColors = StyleSheet.create({
  white: {
    color: colors.white
  },
  textGray: {
    color: colors.textGray
  }
})

export const setBgColors = StyleSheet.create({
  green: {
    backgroundColor: colors.Green
  },
  primary: {
    backgroundColor: colors.primary
  }
})