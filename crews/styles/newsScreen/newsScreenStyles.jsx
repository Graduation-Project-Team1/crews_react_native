import { StyleSheet } from "react-native";
import colors from "../colors";

export const newsScreenStyles = StyleSheet.create({
  layout: {
    width: "100%",
    height: "100%",
    backgroundColor: '#FFFFFF',
    paddingBottom: 60
  },

  header: {
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 16,
    color: '#000000',
    fontSize: 18,
    fontWeight: 700
  },

  contentContainer : {
    width: '100%',
    paddingHorizontal: 16,
  },

  tagContainer : {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 13,
    paddingHorizontal: 16,
  },

  issueBoxArea : {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.dividerGray,
    borderRadius: 13,
    paddingTop: 16,
    paddingBottom: 11,
    paddingHorizontal: 18,
  },

  issueBoxBodyArea : {
    marginTop: 13,
    marginBottom: 15,
    width: '100%',
    fontSize: 13,
    fontWeight: 400
  },

  divider : {
    marginTop: 45,
    width: '100%',
    height: 4,
    backgroundColor: colors.dividerGray
  }
})

export const issueBoxHeaderStyles = StyleSheet.create({
  area : {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  name: {
    fontSize: 13,
    fontWeight: 600,
    color: colors.black,
  },

  id: {
    fontSize: 13,
    fontWeight: 400,
    color: colors.textGray,
  }
})

export const issueBoxFooterStyles = StyleSheet.create({
  area : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  likeText: {
    marginLeft: 4,
    fontSize: 13,
    color: colors.textGray
  },

  right: {
    marginLeft: 4,
    fontSize: 13,
    color: colors.textGray
  }
})

export const communityBoxStyles = StyleSheet.create({
  area: {
    marginRight: 13
  },

  imgArea: {
    borderRadius: 4,
    width: 135,
    height: 83
  },

  title: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 21,
    color: colors.black,
    marginTop: 4
  },

  writer: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 19.5,
    color: colors.black,
  }
})

export const newsBoxStyles = StyleSheet.create({
  container : {
    width: '100%',
    paddingHorizontal: 16,
  },

  area: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 13
  },

  rank: {
    width: 23,
    height: 19,
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 27,
    color: colors.black,
    justifyContent: 'center'
  },

  body: {
    flex:1,
    marginHorizontal: 12
  },

  title: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: colors.black
  },

  subView: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },

  subIcon: {
    color: colors.textGray
  },

  subText: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 19.5,
    color: colors.textGray,
    marginLeft: 4,
    marginRight: 7
  },

  img: {
    width: 74,
    height: 40,
    borderRadius: 10
  }
})