import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const UnselectedTag = ({text}) => {
  return (
    <View style={unSelectedTagStyles.layout}>
      <Text style={unSelectedTagStyles.text}>{text}</Text>
    </View>
  );
};

export default UnselectedTag;

export const unSelectedTagStyles = StyleSheet.create({
  layout: {
    borderWidth: 1.5,
    borderColor: colors.iconGray,
    borderRadius: 50,
    backgroundColor: colors.transparent,
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