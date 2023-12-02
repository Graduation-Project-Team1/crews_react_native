import React from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Clock from "../../assets/icons/icon_clock.svg";
import People from "../../assets/icons/icon_people.svg";
import colors from "../../styles/colors";

const NewsRow = ({order, title, time, watch, img, url}) => {

  const handlePress = () => {
    Linking.openURL(url);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={newsRowStyle.base}>
      <Text style={newsRowStyle.order}>{order}</Text>
      <View style={newsRowStyle.content}>
        <Text style={newsRowStyle.contentTitle}>{title}</Text>
        <View style={newsRowStyle.contentSub}>
            <Clock width={16} height={16}/>
            <Text style={newsRowStyle.contentSubText}>{time}</Text>
            <People width={16} height={16}/>
            <Text style={newsRowStyle.contentSubText}>{watch}</Text>
        </View>
      </View>
      <Image style={newsRowStyle.img} source={{uri: img}}/>
    </View>
    </TouchableOpacity>
  );
};

export default NewsRow;

export const newsRowStyle = StyleSheet.create({
  base: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 13,
  },

  order: {
    width: 23,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 27,
    color: colors.black,
    marginRight: 12,
  },

  content: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  contentTitle: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: colors.black,
    marginBottom: 4,
  },

  contentSub: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  contentSubText: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
    color: colors.textGray,
    marginRight: 7,
    marginLeft: 2,
  },

  img: {
    width: 77,
    height: 40,
    borderRadius: 10,
  },
})

