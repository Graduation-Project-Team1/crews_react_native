import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const SelectedTag = ({text}) => {

  const tagStyle = selectedTagStyle(text);

  return (
    <View style={tagStyle.base}>
      <Text style={tagStyle.text}>{text}</Text>
    </View>
  );
};

export default SelectedTag;



export const selectedTagStyle = (text) => {
  return StyleSheet.create({
    base: {
      borderWidth: 1.5,
      borderColor: text === '트위터' ? colors.twitter : text === '인스타그램' ? colors.instagram : text === '레딧' ? colors.reddit : colors.black,
      borderRadius: 50,
      backgroundColor: colors.transparent,
      paddingVertical: 2,
      paddingHorizontal: 15,
      alignItems: 'center',
    },

    text: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      color: text === '트위터' ? colors.twitter : text === '인스타그램' ? colors.instagram : text === '레딧' ? colors.reddit : colors.black,
      textAlign: 'center', // 텍스트를 가운데 정렬
      paddingVertical: 0, // 텍스트 컴포넌트의 상하 여백 제거
    },
  });
}