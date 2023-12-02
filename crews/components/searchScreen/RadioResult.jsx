import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Play from "../../assets/icons/icon_play.svg";
import colors from "../../styles/colors";

const RadioResult = ({order, title, tags}) => {
  return (
    <View style={radioResultStyle.base}>
      <Text style={radioResultStyle.order}>{order}</Text>
      <View style={radioResultStyle.content}>
        <Text style={radioResultStyle.title}>{title}</Text>
        <View style={radioResultStyle.tags}>
          {tags.map((tag, index) => (
            <Text key={index} style={radioResultStyle.tag}>#{tag}</Text>
          ))}
        </View>
      </View>
      <Play width={35} height={35} />
    </View>
  );
};

export default RadioResult;

export const radioResultStyle = StyleSheet.create({
  base: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 13,
  },

  order: {
    width: 23,
    marginRight: 13,
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 27,
    color: colors.black,
  },

  content: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "flex-start",
  },

  title: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: colors.black,
  },

  tags: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: 10,
  },

  tag: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 19.5,
    color: colors.textGray,
  },
});