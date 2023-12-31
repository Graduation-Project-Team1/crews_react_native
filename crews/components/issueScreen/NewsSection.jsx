import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "styled-components/native";
import colors from "../../styles/colors";
import NewsRow from "../homeScreen/NewsRow";

const NewsSection = ({newsList}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={newsSectionStyle.base}>
      <Text style={[newsSectionStyle.title, {color: theme.text}]}>종합 뉴스</Text>
      <View style={newsSectionStyle.content}>
        { newsList && newsList.map((news, index) => {
          return (
            <NewsRow
              key={index}
              order={index + 1}
              title={news.title}
              time={news.date}
              press={news.press}
              url={news.url}
              />
          );
        })}
      </View>
    </View>
  );
};

export default NewsSection;

export const newsSectionStyle = StyleSheet.create({
  base: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 40,
  },

  title: {
    fontSize: 18,
    fontWeight: 700,
    color: colors.black,
    marginBottom: 20,
  },

  content: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
});