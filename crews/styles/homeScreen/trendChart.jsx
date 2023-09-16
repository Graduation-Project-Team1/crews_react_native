import { StyleSheet } from "react-native";
import colors from "../colors";

export const trendChartStyle = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },

  list: {
    flex: 1,
  },

  listTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 5
  },

  divider: {
    width: 1,
    backgroundColor: colors.BGgray,
    marginLeft: 20,
    marginRight: 20
  }
})