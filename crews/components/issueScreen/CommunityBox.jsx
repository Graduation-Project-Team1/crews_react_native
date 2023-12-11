import React, { useContext } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import { ThemeContext } from "styled-components/native";
import colors from "../../styles/colors";

const CommunityBox = ({img, title, writer, url}) => {
  const theme = useContext(ThemeContext);

  const handlePress = () => {
    Linking.openURL(url);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={communityBoxStyle.base}>
      <Image style={communityBoxStyle.img} source={{uri: img}} />
      <Text style={[communityBoxStyle.title, {color: theme.text}]} numberOfLines={1} ellipsizeMode={'tail'}>{title}</Text>
      <Text style={[communityBoxStyle.writer, {color: theme.text}]}>{writer}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default CommunityBox;

export const communityBoxStyle = StyleSheet.create({
  base: {
    width: 135,
    height: 128,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 13,
  },

  img: {
    width: "100%",
    height: 83,
    borderRadius: 4,
    marginBottom: 4,
  },

  title: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 21,
    color: colors.black,
  },

  writer: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 19.5,
    color: colors.black,
  }
});