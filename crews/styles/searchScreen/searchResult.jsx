import { Dimensions, StyleSheet } from "react-native";
import colors from "../colors";

export const searchResultStyles = StyleSheet.create({
  layout: {
    width: "100%",
    height: "100%",
    paddingVertical: 30,
    paddingHorizontal: 16,
  },

  grayText: {
    color: colors.textGray, // --Text-Gray, #A3A3A3
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21, // 150% of 14px
  },

  headerText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 20
  },

  titleText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24
  },

  subText: {
    color: colors.textGray,
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 24
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.dividerGray,
    marginTop: 20,
  },

  contentContainer: {
    paddingTop: 30,

  },

  team: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },

  teamImg: {
    width: 55,
    height: 55,
    borderRadius: 50
  },

  teamInfo: {
    flex: 1,
    marginLeft: 20,
  },

  teamTitle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 24
  },

  teamCategory: {
    color: colors.black,
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 19.5
  },

  radio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },

  radioContent: {
    flex: 1,
    marginLeft: 13,
  },
  
  rank: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 27
  },

  match: {
    width: '100%',
    height: 74,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: colors.dividerGray,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingVertical: 13,
    paddingHorizontal: 16,
    marginBottom: 11
  },

  matchInfo: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between'
  },

  matchDate: {
    color: colors.black,
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 19.5
  },

  matchScore: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 22.5
  },

  matchImg: {
    marginLeft: 6.5,
    width: 47,
    height: 47,
    borderRadius: 8,
  }
})