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
    paddingBottom: 20,
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
  }
})

export const unSelectedTagStyles = StyleSheet.create({
  layout: {
    marginRight: 11,
    borderWidth: 1.5,
    borderColor: colors.iconGray,
    borderRadius: 100,
    backgroundColor: colors.white,
    paddingVertical: 2,
    paddingHorizontal: 15,
    alignItems: 'center', // 가로로 가운데 정렬
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: colors.iconGray,
    textAlign: 'center', // 텍스트를 가운데 정렬
    paddingVertical: 0, // 텍스트 컴포넌트의 상하 여백 제거
  },
});

export const selectedTagStyles = StyleSheet.create({
  layout: {
    marginRight: 11,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 100,
    backgroundColor: colors.white,
    paddingVertical: 2,
    paddingHorizontal: 15,
    alignItems: 'center', // 가로로 가운데 정렬
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: colors.primary,
    textAlign: 'center', // 텍스트를 가운데 정렬
    paddingVertical: 0, // 텍스트 컴포넌트의 상하 여백 제거
  },
});

export const setColors = StyleSheet.create({
  white: {
    color: colors.white
  },
  twitter: {
    color: colors.twitterBlue
  },
  instagram: {
    color: '#FF007A'
  },
  reddit: {
    color: '#FF910F'
  },
  textGray: {
    color: colors.textGray
  }
})

export const setBgColors = StyleSheet.create({
  green: {
    backgroundColor: colors.Green
  }
})